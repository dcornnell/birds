class AddStyleIdToBirdsTable < ActiveRecord::Migration
  def change
  	add_column :birds, :style_id, :integer
  end
end
