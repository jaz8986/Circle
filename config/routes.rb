Rails.application.routes.draw do
  resources :comments, only: [:index, :show, :create, :destroy]
  resources :posts, only: [:index, :create, :show]
  resources :followers
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  #create new user
  post '/signup', to: 'users#create'
  # checking cookie when refreshing to make sure user has signed in
  get '/authorized', to: 'users#show'
  get '/user', to: 'users#find_user'
end
