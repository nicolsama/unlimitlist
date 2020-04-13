# == Schema Information
#
# Table name: nodes
#
#  id             :bigint           not null, primary key
#  body           :string           not null
#  ord            :integer          not null
#  completed      :boolean          default(FALSE)
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  parent_node_id :integer          not null
#
class Node < ApplicationRecord

    belongs_to :user

    has_many :children,  
        foreign_key: :parent_node_id, 
        class_name: :Node, 
        inverse_of: :parent_node

    belongs_to :parent_node,
        foreign_key: :parent_node_id, 
        class_name: :Node, 
        inverse_of: :children,
        optional: true

    def descendants
        descendants_arr = []
        self.children.each do |child|
            descendants_arr << child.id
            descendants_arr.push(*child.descendants)
        end
        descendants_arr
    end

    def ancestors
        ancestors_arr = []
        parent = self.parent_node
            ancestors_arr << parent.id
            ancestors_arr.push(*parent.ancestors) if parent.parent_node_id
        ancestors_arr
    end


    def root?
        self.parent_node_id == nil
    end

    def self.last_created(nodes_array)
        nodes_array.sort_by{ |node| node[:created_at] }.last[:id]
    end

end
