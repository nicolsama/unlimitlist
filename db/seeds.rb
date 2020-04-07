# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Node.destroy_all

test_user = User.create!(email: "nicolsama@gmail.com", password: "password123")
test_user2 = User.create!(email: "keith@gmail.com", password: "password123")


test_node = Node.create!(user_id: test_user.id, body: "art supplies to #buy", parent_node_id: nil, ord: 1)
test_node2 = Node.create!(user_id: test_user.id, body: "art supplies again", parent_node_id: nil, ord: 2)
test_node3 = Node.create!(user_id: test_user.id, body: "fooood", parent_node_id: nil, ord: 3)
test_node4 = Node.create!(user_id: test_user.id, body: "milk", parent_node_id: nil, ord: 4)