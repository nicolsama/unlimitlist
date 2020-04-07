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

    # has_many :children
    # has_many :shares

    # belongs_to :parent_node
    # has_many :children ????
    #       through :children
    #       source: 

end
