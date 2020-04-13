json.set! :current_node, @node

json.allNodes do 
    json.array! @nodes do |node|
            json.partial! "api/nodes/node.json.jbuilder", node: node
            json.set! :show_children, false
    end
end

@parents = @node.children

json.parentNodeIds do 
    json.array! @parents, :id
end

json.set! :last_created, Node.last_created(@nodes)