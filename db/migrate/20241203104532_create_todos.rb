class CreateTodos < ActiveRecord::Migration[8.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.text :description
      t.date :due_date
      t.string :status

      t.timestamps
    end
  end
end
