class ChangeNodes < ActiveRecord::Migration[5.2]
  def change
    change_column :nodes, :parent_node_id, :integer, null: true
  end
end
