class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render json: "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    if current_user
      logout!
    else
      render json: ["Not logged in"], status: 422
    end
  end
end
