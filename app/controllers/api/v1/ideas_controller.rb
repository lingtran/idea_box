class Api::V1::IdeasController < Api::ApiController
  before_filter :idea_params, on: [:create]

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def destroy
    Idea.find(params[:id].to_i).destroy
    respond_with head: :no_content
  end

  private

    def idea_params
      params.permit(:title, :body)
    end
end
