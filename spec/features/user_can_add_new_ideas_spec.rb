require 'rails_helper'

RSpec.describe "User can add new ideas", type: :feature do
  xscenario "user can add a new idea upon submission" do
    existing_idea = create(:idea)
    new_idea = { title: "New idea title", body: "New idea body" }

    visit root_path

    within('.new-idea') do
      fill_in "Title", with: new_idea[:title]
      fill_in "Body", with: new_idea[:body]
      click_button("Save")
    end

    within('.idea-index') do
      expect(page).to have_content(new_idea[:title])
      expect(page).to have_content(new_idea[:body])
      expect(page).to have_content(existing_idea.title)
      expect(page).to have_content(existing_idea.body)
    end

#     On the application's main page, a user should:
#
# See two text boxes for entering the "Title" and "Body" for a new idea, and a "Save" button for committing that idea. (3 points, mandatory for specification adherence)
# When a user clicks "Save":
#
# A new idea with the provided title and body should appear in the idea list. (5 points, mandatory for specification adherence)
# The text fields should be cleared and ready to accept a new idea. (2 points)
# The page should not reload. (3 points, mandatory for specification adherence)
# The idea should be committed to the database. It should still be present upon reloading the page. (2 points, mandatory for specification adherence)
  end

end
