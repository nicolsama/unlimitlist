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

    has_many :tags, 
        foreign_key: :node_id, 
        class_name: :Tag, 
        dependent: :destroy

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
        if self.parent_node_id
                ancestors_arr << self.parent_node_id 
                ancestors_arr.push(*self.parent_node.ancestors)
        end
        ancestors_arr
    end

    def sibling_nodes
        if self.parent_node 
            self.parent_node.children.where.not(id: self.id)
        else 
            Node.all.select { |node| (node.parent_node_id == self.parent_node_id) && (node.id != self.id) }
        end
    end

    def root?
        self.parent_node_id == nil
    end

    def self.last_created(nodes_array)
        nodes_array.sort_by{ |node| node[:created_at] }.last[:id]
    end

    def self.last_updated(nodes_array)
        nodes_array.sort_by{ |node| node[:updated_at] }.last[:id]
    end

    def save_tags

        old_tags = self.tags
        tag_words = []

        self.body.split(" ").each do |word|
            obj = {tag: word, node_id: self.id, user_id: self.user_id}
            if (word.start_with?("#") && !Tag.find_by(obj))
                new_tag = Tag.new(obj)
                tag = new_tag.save
                tag_words << word
            end
        end

        old_tags.each do |tag|
            if !tag_words.include?(tag.tag) 
                Tag.destroy(tag.id)
            end
        end

        tag_words
    end

    def self.search(search = nil, nodes)
        if search
            results = []

            matches = nodes.where("body LIKE ?", "%#{search}%")
            results += matches

            matches.each do |node|
                ancestors = node.ancestors.map{ |id| Node.find_by(id: id) } 
                results += ancestors
            end
            
            return results.uniq
        else 
            return nodes
        end

    end

end
