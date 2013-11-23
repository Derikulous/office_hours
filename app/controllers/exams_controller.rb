class ExamsController < ApplicationController
  before_action :set_exam, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!, except: [:index, :show]

  def index
    @exams = Exam.all
  end

  def show
  end

  def new
    @exam = Exam.new
    1.times do
      question = @exam.questions.build
      5.times { question.answers.build }
    end

    unless current_user.try(:admin?)
      flash[:alert] = "You are not authorized to view this page."
      redirect_to root_path
    end
  end

  def edit
  end

  def create
    @exam = Exam.new(exam_params)
    authorize @exam
    respond_to do |format|
      if @exam.save
        format.html { redirect_to @exam, notice: 'Exam was successfully created.' }
        format.json { render action: 'show', status: :created, location: @exam }
      else
        format.html { render action: 'new' }
        format.json { render json: @exam.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    authorize @exam
    respond_to do |format|
      if @exam.update(exam_params)
        format.html { redirect_to @exam, notice: 'Exam was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @exam.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @exam.destroy
    respond_to do |format|
      format.html { redirect_to exams_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exam
      @exam = Exam.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exam_params
      params.require(:exam).permit(:name, questions_attributes: [
                                          :id, :exam_id, :content, '_destroy',
                                          answers_attributes: [
                                          :id, :question_id, :content, :correct,
                                          '_destroy'] ])
    end
end
