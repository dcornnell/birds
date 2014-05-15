class BirdsController < ApplicationController
	def index
		@birds = Bird.all
		@new_bird = Bird.new
	end

	def create
		@new_bird = Bird.create(bird_params)
		if @new_bird.save
			redirect birds_path
		else
			redirect birds_path
		end
	end

	def update
		@bird = Bird.find(params[:id])
		if @bird.update_atrributes(bird_params)
			redirect birds_path
		else
			redirect birds_path
		end
	end

		def destroy
		@bird = Bird.find(params[:id])
		if @bird.destroy 
			redirect birds_path
			# respond_to do |format|
			# 	format.js
			# 	format.html { redirect_to users_path }
			
		else
			redirect birds_path
			# respond_to do |format|
			# 	format.js {render plain: "0"}
			# 	format.html {redirect_to users_path}
			
		end
	end

private

	def bird_params
		params.require(:bird).permit!
	end
end


