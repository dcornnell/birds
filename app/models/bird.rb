class Bird <ActiveRecord::Base
belongs_to :style
validates_presence_of :name
validates_uniqueness_of :name


end
