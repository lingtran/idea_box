require 'rails_helper'

RSpec.describe "User can delete idea", type: :feature do
  xscenario "they can delete an idea", :js => true do
    new_idea = { title: "New idea title", body: "New idea body" }

    visit root_path

    3.times do
      within('.new-idea') do
        fill_in "Title", with: new_idea[:title]
        fill_in "Body", with: new_idea[:body]
        click_button("Save")
      end
    end

    original_count = page.all('.ideas-list').length

    wait_for_ajax

    expect{within('.ideas-index') do
      page.all('.delete-idea')[0].click
    end}.to change{Idea.count}.by(-1)

    visit current_path

    wait_for_ajax

    new_count = page.all('.ideas-list').length

    expect(new_count).not_to eq(original_count)
  end
end
