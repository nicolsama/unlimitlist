class Api::NodesController < ApplicationController

    def index
        @node = Node.first
        @nodes = current_user.nodes.includes(:children)
        @tags = current_user.tags.map { |tag| tag.tag }.uniq

        if params[:search]
            @filtered_nodes = Node.search(search_params[:tag], @nodes)
            @search = search_params[:tag]
        else            
            @filtered_nodes = []
            @search = false
        end
        
        render :index
    end

    def show
        @node = Node.find_by(id: params[:id])
        @nodes = @node.descendants.map {|id| Node.find_by(id: id)}
        @tags = current_user.tags.map { |tag| tag.tag }.uniq

        render :show
    end
    
    def create
        @node = Node.new(node_params)
        @node.user_id = current_user.id
        @node.ord = Node.maximum(:ord)
       
        if @node.save && @node.save_tags

            siblings = @node.sibling_nodes
            younger_siblings = siblings.select { |node| node.ord > params[:node][:ord_bookmark].to_i }
            younger_siblings_ords = younger_siblings.map { |node| node.ord }
            old_ords = younger_siblings_ords.concat([@node.id]).sort
            new_ords = old_ords.rotate(1) 
            mapping = {}

            old_ords.each_with_index do |ord, i| 
                mapping[ord] = new_ords[i] 
            end
            
            younger_siblings.each  do |node|
                node.ord = mapping[node.ord]
                node.save
            end

            @nodes = current_user.nodes.includes(:children)
            @tags = current_user.tags.map { |tag| tag.tag }.uniq

            @filtered_nodes = []
            @search = false
            render :index
        else 

            render json: @node.errors.full_messages
        end
    end

    def update
        @node = Node.find_by(id: params[:id])

        if @node && @node.update(node_params) && @node.save_tags
            @nodes = current_user.nodes.includes(:children)
            @tags = current_user.tags.map { |tag| tag.tag }.uniq

            @filtered_nodes = []
            @search = false
            render :index
        else 

            render json: @node.errors.full_messages
        end
    end


    def destroy
        Node.destroy(params[:id])
        @node = Node.first
        @nodes = current_user.nodes.includes(:children)
        @tags = current_user.tags.map { |tag| tag.tag }.uniq

        @filtered_nodes = []
        @search = false
        render :index
    end

    private
    def node_params
        params.require(:node).permit(:body, :completed, :ord, :parent_node_id, :search)
    end

    def search_params
        params.require(:search).permit(:tag)
    end

end