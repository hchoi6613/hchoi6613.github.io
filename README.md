# Hana's Portfolio
[![Deploy Jekyll site to Pages](https://github.com/hchoi6613/hchoi6613.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/hchoi6613/hchoi6613.github.io/actions/workflows/jekyll.yml)

## Requirements
Setup Jekyll by installing the required packages https://jekyllrb.com/docs/installation/

## Local Development
To run locally
1. `bundle install`
2. `bundle exec jekyll serve`
3. Preview at `http://localhost:4000`

## Adding a Project
1. Add a post under `_posts`
    - Make sure it follows the format `YEAR-MONTH-DAY-subject.markdown`
    - This allows efficient ordering of the posts
2. Changing the Card
    - The card can be changed using the properties on the top of the markdown page

    ```md
    ---
    layout: post
    title: RISD Museum Rebranding
    cover_image: assets/covers/risd-museum.jpg
    timeline: Spring 2022
    tags:
    - Branding
    ---
    ```
    - `layout` must be `post` to utilize the post layout
    - `title` is the main title of the card
    - `cover_image` is the location of where the image is located
    - `timeline` is the time spent or duration of the project
    - `tags` is an optional list that is displayed as pills

3. All of the pages are written in markdown. For documentation on how to write in markdown, see https://www.markdownguide.org/