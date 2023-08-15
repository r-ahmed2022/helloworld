Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
    root "root#index"
    namespace :api do
      namespace :v1 do
        resources :greetings, to: 'greetings#show_greeting'
      end
    end
  #  get "*path", to: 'root#index', via: :all 

end
