class Api::NodesController < ApplicationController

    def index
        @node = Node.first
        @nodes = current_user.nodes
        render :index
    end

    def show
        @node = Node.find_by(id: params[:id])
        @nodes = @node.descendants.map {|id| Node.find_by(id: id)}
        render :show
    end
    
    def create
        @node = Node.new(node_params)
        @node.user_id = current_user.id
        @node.ord = Node.maximum(:ord)
        #   debugger
        if @node.save
            siblings = @node.sibling_nodes
            younger_siblings = siblings.select { |node| node.ord > params[:node][:ord_bookmark].to_i }
            younger_siblings_ords = younger_siblings.map { |node| node.ord }
            old_ords = younger_siblings_ords.concat([@node.id]).sort
            new_ords = old_ords.rotate(1) 
            mapping = {}

            old_ords.each_with_index do |ord, i| 
                mapping[ord] = new_ords[i] 
            end
            # debugger
            younger_siblings.each  do |node|
                node.ord = mapping[node.ord]
                node.save
            end
            # debugger
            @nodes = current_user.nodes
            # debugger
            render :index
        else 

            render json: @node.errors.full_messages
        end
    end

    def insert 
    end

    def update
        @node = Node.find_by(id: params[:id])
        if @node && @node.update(node_params)
            
            @nodes = current_user.nodes.includes(:children)
            render :index
        else 
            # debugger
            render json: @node.errors.full_messages
        end
    end

    def destroy
        Node.delete(params[:id])
        @node = Node.first
        @nodes = current_user.nodes
        render :index
    end

    private
    def node_params
        params.require(:node).permit(:body, :completed, :ord, :parent_node_id)
    end

end