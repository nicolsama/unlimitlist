class Api::SessionsController < ApplicationController


    def create

        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if !@user

            render json: @user.errors.full_messages, status: 401
        else
            login!(@user)
            render json: @user
        end
    end

    def destroy
        render status: 404 if !current_user;
        logout!
        render json: {}
    end

end