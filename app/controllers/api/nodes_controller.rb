class Api::NodesController < ApplicationController

    def index
        # debugger
        @nodes = current_user.nodes.includes(:children)
    end

    def show
        @node = Node.find_by(id: params[:id])
    end
    
    def create
        @node = Node.new(node_params)
        @node.user_id = current_user.id
        @node.ord = Node.maximum(:ord) + 1
        # debugger
        if @node.save
            # debugger
            render :show
        else 
            # debugger
            render json: @node.errors.full_messages
        end
    end

    def update
        # debugger; 
        @node = Node.find_by(id: params[:id])
        if @node && @node.update(node_params)

            render :show 
        else 
            # debugger
            render json: @node.errors.full_messages
        end
    end

    def destroy
        Node.delete(params[:id])
    end

    private
    def node_params
        params.require(:node).permit(:body, :completed, :ord, :parent_node_id)
    end

end