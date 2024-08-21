module Api
  module V1
    class CoursesController < ApplicationController
      def index
        courses = Course.all
        render json: courses
      end

      def show
        course = Course.find(params[:id])
        render json: course, include: ['lectures']
      end
    end
  end
end
