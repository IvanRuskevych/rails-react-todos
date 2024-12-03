Rails.application.routes.draw do
  # v1
  # root 'homepage#index'
  # resources :todos, only: %i[index create update destroy]
  # get '*path', to: 'home#index', constraints: ->(req) { !req.xhr? && req.format.html? }


    # v2
    # root 'homepage#index'
    # resources :todos, only: %i[index create update destroy show]
    # get '*path', to: 'homepage#index', constraints: ->(req) { !req.xhr? && req.format.html? }

    root 'homepage#index'

    # Маршрути для API
    resources :todos, only: %i[index create update destroy show]

    # Ловити всі інші запити та передавати їх React-додатку
    get '*path', to: 'homepage#index', constraints: ->(req) { !req.xhr? && req.format.html? }



  # get "homepage/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
