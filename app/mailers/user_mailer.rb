class UserMailer < ApplicationMailer
	default from: "info@vinelist.com"

	def marketing_email(email)
		#@user_one = User.first
		@email = email
		
		mail(to: 'danielcw@gmail.com', subject:'Serenity Email Tester')
	end
end
