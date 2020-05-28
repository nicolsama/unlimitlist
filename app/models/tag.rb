class Tag < ApplicationRecord 

    belongs_to :node,
        dependent: :destroy

    belongs_to :user,
        dependent: :destroy

end