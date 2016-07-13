## Production Site
[http://my-ideabox.herokuapp.com/](http://my-ideabox.herokuapp.com/)

![http://g.recordit.co/yOEQEhJYTR.gif](http://g.recordit.co/yOEQEhJYTR.gif)

## Synopsis

Single-page app with full CRUD functionality for capturing ideas. Focus was to provide a fluid and responsive client-side interface.


## Tech Stack

##### Front-end
> JavaScript | jQuery | AJAX | HTML | CSS

##### Back-end
> Ruby on Rails | Ruby | PostgreSQL | ActiveRecord

## Motivation

This project's learning goals were focused on delving deeper into understanding the difference between "server" and "client" entities. It focused on creating a Rails application to manage data related to ideas, serve initial UI templates, and to manage client-side interactions and communication asynchronously with the server. Obtained more experience doing DOM manipulations and AJAX event handling without using any client-side frameworks. All AJAX functionality was triggered by jQuery.

* [Project Spec](https://github.com/turingschool/curriculum/blob/master/source/projects/revenge_of_idea_box.markdown)
* [Project Evaluation](https://github.com/lingtran/idea_box/blob/master/idea-box-eval.md)
  * Exceeded total assigned points with addition of self-directed UX feature enhancement beyond project spec

## Installation

##### Clone git repo
> `git clone https://github.com/lingtran/idea_box.git`

#### Install Gems
> `bundle install`

##### Loading the database and seed file
> For initial setup:
`rake db:setup`

> Alternative setup:
`rake db:create db:migrate db:seed`

#### Run development environment
> `rails s`

> Visit url: `http://localhost:3000`

## Tests

Test Suite: RSpec/Factory Girl/Database Cleaner/Selenium WebDriver/Capybara

##### Run all tests
> Fire up server: `rails s`

> Run test suite: `rspec`

## Internal API Reference

Endpoint of internal API created to interact with the Google Charts API:

> `GET '/api/v1/ideas.json'` - Render all ideas

> `POST '/api/v1/ideas.json?title=:newIdeaTitle&body=:newIdeaBody'` - Create new idea with a title and body

> `PATCH '/api/v1/ideas/:id.json?title=:updateTitle&body=:updateBody'` - Update an idea at specified :id and with title and body parameters

> `PATCH '/api/v1/ideas/:id.json?id=:ideaID&quality=:updateWithQuality'` - Update an idea at specified :id either by incrementing quality ['swill' -> 'swill' -> 'genius'] or by decrementing quality ['genius' -> 'plausible' -> 'swill']

> `DELETE '/api/v1/ideas/:id.json'` - Delete an idea at specified :id
