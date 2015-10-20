class PagesController < ApplicationController

	def index 

	end


	def features

	end


	def floorplans

	end


	def location

	end


	def site_plan

	end
	

	def contact_us

	end

	def email_service
		UserMailer.marketing_email(params[:code]).deliver_now
	end
end
