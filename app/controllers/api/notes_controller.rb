class Api::NotesController < ApplicationController

  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 403
    end
  end

  def show
    @note = Note.find_by(id: params[:id])
  end

  def index
    @notes = Note.all
  end

  def update
    @note = Note.find_by(id: params[:id])
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 403
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])
    @note.destroy

    render :show
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
