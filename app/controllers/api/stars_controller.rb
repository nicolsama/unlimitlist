class Api::StarsController < ApplicationController

    def create 
        debugger
        Star.create(node_id: star_params[:node_id], user_id: current_user.id)
        @node = Node.first
        @nodes = current_user.nodes.includes(:children)
        @tags = current_user.tags.map { |tag| tag.tag }.uniq
        @stars = current_user.stars
        @filtered_nodes = []
        @search = false
        render 'api/nodes/index'
    end


    def destroy
        Star.destroy(params[:id])
        @node = Node.first
        @nodes = current_user.nodes.includes(:children)
        @tags = current_user.tags.map { |tag| tag.tag }.uniq
        @stars = current_user.stars
        @filtered_nodes = []
        @search = false
        render 'api/nodes/index'
    end

    private
    
    def star_params
        params.require(:star).permit(:node_id)
    end
    
end