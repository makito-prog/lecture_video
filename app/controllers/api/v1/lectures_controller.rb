module Api
  module V1
    class LecturesController < ApplicationController
      before_action :set_lecture, only: [:show]

      def create
        @lecture = Lecture.new(lecture_params)
        if @lecture.save
          render json: @lecture, status: :created
        else
          render json: { error: 'Failed to create lecture' }, status: :unprocessable_entity
        end
      end

      def show
        lecture = Lecture.find(params[:id])
        render json: lecture.as_json(only: [:id, :title, :video_url])
      end

      private

      def set_lecture
        @lecture = Lecture.find(params[:id])
      end

      def lecture_params
        # :video はActiveStorage用のものなので、ここでは :video_url を使います
        params.require(:lecture).permit(:title, :video_url, :course_id)
      end
    end
  end
end
