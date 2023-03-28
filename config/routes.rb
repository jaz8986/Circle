Rails.application.routes.draw do
  resources :comments, only: [:index, :show, :create, :destroy]
  resources :posts, only: [:index, :create, :show]
  resources :followers, only: [:create]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  delete '/:id/unfollow', to: 'followers#destroy'
  patch '/location', to: 'users#patch_location'
  get '/users/:id', to: 'users#show'
  #create new user
  post '/signup', to: 'users#create'
  # checking cookie when refreshing to make sure user has signed in
  get '/authorized', to: 'users#show'
  get '/user', to: 'users#find_user'
end
