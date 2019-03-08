class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render "api/tags/show"
    else
      render json: @tag.errors.full_messages, status: 409
    end
  end

  def show
    @tag = Tag.where({ owner_id: current_user.id })
              .includes(:notes)
              .find_by(id: params[:id])
  end

  def index
    @tags = Tag.where({owner_id: current_user.id})
  end

  def update
    @tag = Tag.find_by(id: params[:id])

    if @tag.update(tag_params)
      render "api/tags/show"
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    @tag.destroy

    head :no_content, content_type: "text/html"
  end

  private
  def tag_params
    params.require(:tag).permit(:name, :owner_id)
  end
end
