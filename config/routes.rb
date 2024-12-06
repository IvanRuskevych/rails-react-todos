Rails.application.routes.draw do
    root 'homepage#index'

    # API path with /api/v1
    namespace :api do
      namespace :v1 do
        resources :todos, only: %i[index create update destroy show]
      end
    end

    # Other path for React-app
    get '*path', to: 'homepage#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
