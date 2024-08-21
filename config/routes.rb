Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :courses, only: [:index, :show] do
        resources :lectures, only: [:show]
      end
    end
  end

end
