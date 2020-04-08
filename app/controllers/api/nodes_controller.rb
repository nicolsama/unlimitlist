class Api::NodesController < ApplicationController

    def index
        @nodes = current_user.nodes
    end

    def show
        @node = Node.find_by(id: params[:id])
    end
    
    def create
        @node = Node.new(node_params)
        @node.user_id = current_user.id
        @node.ord = Node.last.ord + 1
        debugger
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
        params.require(:node).permit(:body, :completed)
    end

end