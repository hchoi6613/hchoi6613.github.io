# Hana's Portfolio

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
    title:  "4yew!"
    cover_image: /assets/covers/4yew.png
    excerpt: 4YEW Juice & Smoothie Bar
    ---
    ```

    - `title` is the main title of the card
    - `cover_image` is the location of where the image is located
    - `excerpt` is optional but provides the subheading. 
        - If it is not in the metadata, then it will use the first sentences of the markdown content.

3. All of the pages are written in markdown. For documentation on how to write in markdown, see https://www.markdownguide.org/