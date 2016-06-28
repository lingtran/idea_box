class Api::V1::IdeasController < Api::ApiController
  before_filter :idea_params, on: [:create, :update]

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    idea = Idea.update(params[:id], quality: idea_params[:quality])
    respond_with idea, json: idea
  end


  def destroy
    idea = Idea.find(params[:id].to_i)
    idea.destroy
    respond_with idea
  end

  private

    def idea_params
      params.permit(:title, :body, :quality)
    end
end
