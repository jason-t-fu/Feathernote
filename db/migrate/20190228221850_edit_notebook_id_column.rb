class EditNotebookIdColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :notes, :notebookId, :notebook_id
  end
end
