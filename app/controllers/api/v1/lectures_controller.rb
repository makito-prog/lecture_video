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
        if @lecture.video.attached?
          video_url = url_for(@lecture.video) # ActiveStorage での動画 URL を取得
        else
          video_url = "default_video_url" # ここで適切なデフォルトURLを指定
        end
        render json: { id: @lecture.id, title: @lecture.title, video_url: video_url }
      end

      private

      def set_lecture
        @lecture = Lecture.find(params[:id])
      end

      def lecture_params
        params.require(:lecture).permit(:title, :video, :course_id)
      end
    end
  end
end
