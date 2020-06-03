# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :email, :session_token,  null: false, uniqueness: true
    validates :password, allow_nil: true, length:  {minimum: 6}
    validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

    has_many :nodes, 
        dependent: :destroy
        
    has_many :tags, 
        foreign_key: :user_id, 
        class_name: :Tag

    has_many :stars,
        foreign_key: :user_id,
        class_name: :Star

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        return nil 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

end
