require 'rails_helper'

RSpec.describe "User can add new ideas", type: :feature do
  scenario "user can add a new idea upon submission", :js => true do
    new_idea = { title: "New idea title", body: "New idea body" }

    visit root_path

    within('.new-idea') do
      fill_in "Title", with: new_idea[:title]
      fill_in "Body", with: new_idea[:body]
      click_button("Save")
    end

    wait_for_ajax

    within('.ideas-table') do
      expect(page.all('.ideas-list').first).to have_content(new_idea[:title])
      expect(page.all('.ideas-list').first).to have_content(new_idea[:body])
    end
  end

end
