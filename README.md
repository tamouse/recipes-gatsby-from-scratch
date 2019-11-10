n# Gatsby 2.0 Edition of my recipe file

There have been at least 2 other attemps at doing this in Gatsby.

I'm following this post to construct it from scratch: <https://blog.scottspence.me/build-a-coding-blog-with-mdx-and-gatsby-2019> which is actually pretty good. The post is talking about building a blog, but it's a reasonable step to think of recipes as blog posts.

I aboslutely love the use of React hooks here, too. The author's creation of a hook to supply the site metadata is just brilliant.

## Categories are subdirectories

I am putting the recipe files under the directory `recipes` and a directory corresponding to the category for the recipe. Here's the list of categories:

```
recipes/appetizers
recipes/baked-goods
recipes/breakfast
recipes/desserts
recipes/drinks
recipes/kitchen-tips
recipes/main-dishes
recipes/pizza
recipes/salads
recipes/sandwiches
recipes/sauces
recipes/side-dishes
recipes/soups
```

### Category Hook

This runs the static query to pull up the category names. See `src/hooks/useCategory.js` for the code. The gql for this query took a while to work out, as I was also learning new fields and filters for it. It uses the `allDirectory` root query to get the list of relative directory paths underneath `recipes/`.

## Fixing recipe markdown

### Frontmatter

Since the original space for this recipe files was a JekyllRB repo, a few things need fixing up:

- the date: this is the most important thing since Gatsby **requires** the post have an ISO8601 format date (YYYY-mm-ddTHH:MM:SS-xxxx).
- there's no layout to specify here
- we don't need the category anymore
- the `external_url` variable would probably be better called `source`

It would probably make sense to write a simple filter to rewrite the frontmatter on posts. (See `./scripts/fix_date.rb` - it fixes more than the date.)

### Body

There are some posts that contain Liquid templating code. There's no direct analog in gatsby. This might make sense are a subcomponent, or as a React component in the mdx page. We'll have to see.

## Category Pages

I want to be able to list recipes for a given category.

Gatsby's `Link` provides a way to do this by sending a `state` prop: <https://www.gatsbyjs.org/docs/gatsby-link/#pass-state-as-props-to-the-linked-page>. I'm not sure this will quite work, though.

I thing I'll need to generate the category pages in `gatsby-node.js`.

Rather than duplicating a bunch of code, I could use the `useCategories` hook, or write a similar hook that gets the recipes in a single category, `useCategory("appetizers")`, to get the list of recipes. Maybe something like:

``` javascript
import React from "react"
import { useCategory } from "../src/hooks/useCategory"
import RecipeList from "../src/components/RecipeList"

export default ({category}) => {
    const { recipes } = useCategory(category)
    return (
	    <h3>{category}</h3>
	    <RecipeList recipes={recipes} />
    )
}
```
