class Api::StarsController < ApplicationController

    def create 
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
        star = Star.find_by(node_id: params[:id])
        Star.destroy(star.id)
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