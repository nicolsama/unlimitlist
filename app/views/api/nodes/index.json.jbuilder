json.allNodes do 
    json.array! @nodes do |node|
            json.partial! "api/nodes/node.json.jbuilder", node: node
    end
end

@parents = @nodes.select { |node| node.root? }

json.parentNodeIds do 
    json.array! @parents, :id
end


