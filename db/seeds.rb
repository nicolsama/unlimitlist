# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Node.destroy_all
Branch.destroy_all

# test_user = User.create!(email: "nicolsama@gmail.com", password: "password123")
test_user2 = User.create!(email: "tasha@tasha.com", password: "password")

# test_node = Node.create!(user_id: test_user.id, body: "art supplies to #buy", parent_node_id: nil, ord: 1)
# test_node2 = Node.create!(user_id: test_user.id, body: "art supplies again", parent_node_id: nil, ord: 2)
# test_node3 = Node.create!(user_id: test_user.id, body: "fooood", parent_node_id: nil, ord: 3)
# test_node4 = Node.create!(user_id: test_user.id, body: "milk", parent_node_id: nil, ord: 4)

test_node0 = Node.create!(user_id: test_user2.id, body: "I am the root node", parent_node_id: nil, ord: 1)
test_node1 = Node.create!(user_id: test_user2.id, body: "textbooks to buy", parent_node_id: test_node0.id, ord: 2)
test_node2 = Node.create!(user_id: test_user2.id, body: "groceries", parent_node_id: test_node0.id, ord: 3)
test_node3 = Node.create!(user_id: test_user2.id, body: "fooood", parent_node_id: test_node2.id, ord: 4)
test_node4 = Node.create!(user_id: test_user2.id, body: "milk", parent_node_id: test_node2.id, ord: 5)
test_node5 = Node.create!(user_id: test_user2.id, body: "eggs", parent_node_id: test_node2.id, ord: 6)
test_node6 = Node.create!(user_id: test_user2.id, body: "arugula", parent_node_id: test_node2.id, ord: 7)
test_node7 = Node.create!(user_id: test_user2.id, body: "vacation ideas", parent_node_id: test_node0.id, ord: 8)
test_node8 = Node.create!(user_id: test_user2.id, body: "peru", parent_node_id: test_node7.id, ord: 9)
test_node9 = Node.create!(user_id: test_user2.id, body: "japan", parent_node_id: test_node7.id, ord: 10)


# branch1 = Branch.create!(parent_node_id: test_node2.id, child_node_id: test_node3.id)
# branch2 = Branch.create!(parent_node_id: test_node2.id, child_node_id: test_node4.id)
# branch3 = Branch.create!(parent_node_id: test_node2.id, child_node_id: test_node5.id)
# branch4 = Branch.create!(parent_node_id: test_node0.id, child_node_id: test_node1.id)
# branch5 = Branch.create!(parent_node_id: test_node0.id, child_node_id: test_node2.id)
# branch6 = Branch.create!(parent_node_id: test_node0.id, child_node_id: test_node6.id)


