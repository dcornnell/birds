Rails.application.routes.draw do
  resources :birds


  root 'birds#index'


end
