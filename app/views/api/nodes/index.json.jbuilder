json.array! @nodes do |node|
  json.extract! node, :id, :body, :completed, :ord, :parent_node_id
  json.set! :child_node_ids, node.children
end