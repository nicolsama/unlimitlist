json.array! @nodes do |node|
    # if node.root?
        json.partial! "api/nodes/node.json.jbuilder", node: node
    # end
end


