class CreateBirds < ActiveRecord::Migration
  def change
    create_table :birds do |t|
      t.string :name
      t.string :size, default: "medium"
      t.string :color, default: "blue"
      t.boolean :destroyable,     default: true
    end
  end
end
