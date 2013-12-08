class SolutionsController < ApplicationController
  before_action :set_solution, only: [:show, :edit, :update, :destroy]
  before_filter :load_question

  def index
    @solutions = @question.solutions.all
  end

  def show
    @solution = @question.solutions.find(params[:id])
  end

  def new
    @solution = @question.solutions.new
    @progress = @question.exam.generate_progress(current_user)
  end

  def edit
  end

  def create
    @solution = @question.solutions.new(solution_params)
    if @solution.save
      @solution.check_answer(params[:answer])
      if @question.exam.next_question(current_user)
        redirect_to new_question_solution_path([@question.exam.next_question(current_user)])
      else
        redirect_to exams_path
      end
    end
  end

  def update
  end

  private

  def solution_params
    params.require(:solution).permit(:id, :question_id, :correct, :user_id,
                                    question_attributes: [:content, :question_id
                                                      ])
  end

  def load_question
    @question = Question.find(params[:question_id])
  end
end
