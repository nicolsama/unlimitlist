json.set! :current_node, @node
json.set! :search, @search
json.allNodes do 
    json.array! @nodes do |node|
            json.partial! "api/nodes/node.json.jbuilder", node: node
    end
end

json.filteredNodes do 
    json.array! @filtered_nodes do |node|
        json.partial! "api/nodes/node.json.jbuilder", node: node
    end
end

@filtered_parents = @filtered_nodes.select { |node| node.root? }

json.filteredParentNodeIds do 
    json.array! @filtered_parents, :id
end

@parents = @nodes.select { |node| node.root? }

json.parentNodeIds do 
    json.array! @parents, :id
end

json.set! :tags, @tags
json.set! :stars, @stars

json.set! :last_created, Node.last_created(@nodes)
json.set! :path, @node.ancestors
