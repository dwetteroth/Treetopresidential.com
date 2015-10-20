class ApplicationMailer < ActionMailer::Base
  include Roadie::Rails::Automatic

  default from: '"Daniel Wetteroth" <danielcw@gmail.com>'

  layout 'mailer'
end
