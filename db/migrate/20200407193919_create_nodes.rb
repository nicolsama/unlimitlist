class CreateNodes < ActiveRecord::Migration[5.2]
  def change
    create_table :nodes do |t|
      t.string :body, null: false
      t.integer :ord, null: false
      t.boolean :completed, default: false
      t.integer :user_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.integer :parent_node_id, null: false
    end
    add_index :nodes, :user_id
    add_index :nodes, :parent_node_id
  end
end
