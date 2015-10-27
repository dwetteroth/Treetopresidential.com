class UserMailer < ApplicationMailer
	default from: "info@vinelist.com"

	def marketing_email(email)
		
		@email = email
		
		mail(to: 'olga.jackson@gmail.com', subject:'Serenity Email Maillist')
	end
end
