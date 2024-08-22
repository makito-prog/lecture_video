class Api::V1::CoursesController < ApplicationController
  def index
    begin
      courses = Course.includes(:lectures).all
      render json: courses, include: :lectures
    rescue => e
      logger.error "Failed to fetch courses: #{e.message}"
      render json: { error: 'Internal Server Error' }, status: :internal_server_error
    end
  end

  def show
    begin
      course = Course.includes(:lectures).find(params[:id])
      render json: course, include: :lectures
    rescue => e
      logger.error "Failed to fetch course: #{e.message}"
      render json: { error: 'Internal Server Error' }, status: :internal_server_error
    end
  end
end
