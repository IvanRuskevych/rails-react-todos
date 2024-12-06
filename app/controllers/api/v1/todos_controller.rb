class Api::V1::TodosController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]

  def index
    todos = Todo.all.order(created_at: :desc)
    render json: todos
  end


  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo, status: :created
    else
      render json: { errors: todo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    if todo.update(todo_params)
      render json: todo
    else
      render json: { errors: todo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    head :no_content
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :description, :due_date, :status)
  end

end
