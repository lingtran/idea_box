require 'rails_helper'

RSpec.describe "User can view ideas", type: :feature do
  scenario "user can view all existing ideas" do
    idea_one, idea_two, idea_three = create_list(:ideas, 3)
    
  end
end
