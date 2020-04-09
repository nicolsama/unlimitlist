class CreateBranches < ActiveRecord::Migration[5.2]
  def change
    create_table :branches do |t|
      t.integer :parent_node_id, null: false
      t.integer :child_node_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end
end
