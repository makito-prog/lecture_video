module Api
  module V1
    class LecturesController < ApplicationController
      def show
        lecture = Lecture.find(params[:id])
        render json: lecture
      end
    end
  end
end
