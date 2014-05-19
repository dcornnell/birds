class BirdsController < ApplicationController
	def index
		@birds = Bird.all
		@new_bird = Bird.new
	end

	def create
		@new_bird = Bird.create(bird_params)
		respond_to do |format|
			format.html { redirect_to birds_path}
			format.js {render json: @new_bird}
			
		end
	end

	def update
		@bird = Bird.find(params[:id])
		if @bird.update_attributes(bird_params)
			respond_to do |format|
				format.js {render json: @bird }
				format.html { redirect_to birds_path }
			end
		else
			respond_to do |format|
				format.js {render plain: "0"}
				format.html {redirect_to birds_path}
			end
		end
	end

	def destroy
		@bird = Bird.find(params[:id])
		if @bird.destroy 
			
			respond_to do |format|
				format.js
				format.html { redirect_to users_path }
			end
		end
	end

private

	def bird_params
		params.require(:bird).permit!
	end
end


