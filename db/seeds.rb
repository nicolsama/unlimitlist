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
# test_user2 = User.create!(email: "tasha@tasha.com", password: "password")

demoUser = User.create!(           
            email: "demo@email.com",
            password: '1234567')

# test_node = Node.create!(user_id: test_user.id, body: "art supplies to #buy", parent_node_id: nil, ord: 1)
# test_node2 = Node.create!(user_id: test_user.id, body: "art supplies again", parent_node_id: nil, ord: 2)
# test_node3 = Node.create!(user_id: test_user.id, body: "fooood", parent_node_id: nil, ord: 3)
# test_node4 = Node.create!(user_id: test_user.id, body: "milk", parent_node_id: nil, ord: 4)


test_node16 = Node.create!(user_id: demoUser.id, body: "Welcome to my fullstack!", parent_node_id: nil, ord: 1)
test_node15 = Node.create!(user_id: demoUser.id, body: "I'm so sleepy", parent_node_id: test_node16.id, ord: 2)

test_node14 = Node.create!(user_id: demoUser.id, body: "These are root nodes : D", parent_node_id: nil, ord: 3)
test_node13 = Node.create!(user_id: demoUser.id, body: "Expand any list to see it's sublist", parent_node_id: nil, ord: 4)
test_node0 = Node.create!(user_id: demoUser.id, body: "And it's sublist", parent_node_id: test_node13.id, ord: 5)
test_node17 = Node.create!(user_id: demoUser.id, body: "And it's sublist", parent_node_id: test_node0.id, ord: 6)

test_node2 = Node.create!(user_id: demoUser.id, body: "groceries", parent_node_id: test_node0.id, ord: 7)
test_node3 = Node.create!(user_id: demoUser.id, body: "fooood", parent_node_id: test_node2.id, ord: 8)
test_node4 = Node.create!(user_id: demoUser.id, body: "milk", parent_node_id: test_node2.id, ord: 9)
test_node5 = Node.create!(user_id: demoUser.id, body: "eggs", parent_node_id: test_node2.id, ord: 10)
test_node6 = Node.create!(user_id: demoUser.id, body: "arugula", parent_node_id: test_node2.id, ord: 11)
test_node11 = Node.create!(user_id: demoUser.id, body: "spinach", parent_node_id: test_node2.id, ord: 12)
test_node12 = Node.create!(user_id: demoUser.id, body: "pierogies", parent_node_id: test_node2.id, ord: 13)

test_node7 = Node.create!(user_id: demoUser.id, body: "vacation ideas", parent_node_id: test_node0.id, ord: 14)
test_node10 = Node.create!(user_id: demoUser.id, body: "peru", parent_node_id: test_node7.id, ord: 15)
test_node18 = Node.create!(user_id: demoUser.id, body: "llamas", parent_node_id: test_node10.id, ord: 17)
test_node9 = Node.create!(user_id: demoUser.id, body: "japan", parent_node_id: test_node7.id, ord: 16)




# branch1 = Branch.create!(parent_node_id: test_node2.id, child_node_id: test_node3.id)
# branch2 = Branch.create!(parent_node_id: test_node2.id, child_node_id: test_node4.id)
# branch3 = Branch.create!(parent_node_id: test_node2.id, child_node_id: test_node5.id)
# branch4 = Branch.create!(parent_node_id: test_node0.id, child_node_id: test_node1.id)
# branch5 = Branch.create!(parent_node_id: test_node0.id, child_node_id: test_node2.id)
# branch6 = Branch.create!(parent_node_id: test_node0.id, child_node_id: test_node6.id)


