class ApplicationController < ActionController::Base
    #CLLLE
    
    skip_before_action :verify_authenticity_token
    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    
    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token! 
    end

    def logout! 
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def ensure_logged_in
        unless current_user
            render json: ['Not logged in']
        end
    end
end
