class Api::NotebooksController < ApplicationController

  def create
    @notebook = Notebook.new(notebook_params)

    if @notebook.save
      render "api/notebooks/show"
    else
      render json: @notebook.errors.full_messages, status: 409
    end
  end

  def show
    @notebook = Notebook.where({ owner_id: current_user.id })
                        .includes(:notes)
                        .find_by(id: params[:id])
  end

  def index
    @notebooks = Notebook.where({ owner_id: current_user.id })
  end

  def update
    @notebook = Notebook.find_by(id: params[:id])

    if @notebook.update(notebook_params)
      render "api/notebooks/show"
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find_by(id: params[:id])
    @notebook.destroy

    head :no_content, content_type: "text/html"
    #might be error
  end

  private
  def notebook_params
    params.require(:notebook).permit(:title, :owner_id)
  end
end
