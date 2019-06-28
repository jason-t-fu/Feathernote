class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      @user.create_initial_notebook!
      render "api/users/show"
    else
      render json: 
        { email: @user.errors.messages[:email],
          password: @user.errors.messages[:password]
        }, status: 409
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
