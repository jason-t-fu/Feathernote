class RemoveNotebookIdDefault < ActiveRecord::Migration[5.2]
  def up
    change_column_default :notes, :notebook_id, nil
  end

  def down
    change_column_default :notes, :notebook_id, 1
  end
end
