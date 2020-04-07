json.array! @nodes do |node|
  json.extract! node, :id, :body, :completed, :ord, :parent_node_id
end