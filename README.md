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

I want to be able to list recipes for a given category. To do this, I have to generate the page for each category.

This requires additions in `gatsby-node.js` to build the each page using a template, just like we're doing with markdown pages, only we need a separate source for this.

The following query is added:

``` graphql
allDirectory(filter: { absolutePath: { glob: "**/recipes/*" } }) {
  nodes {
    relativePath
  }
}
```

This provides a collection of paths directly under the `/recipes/` directory, which are my categories.

Inside the `then` block, I've added the following:

``` javascript
const categories = result.data.allDirectory.nodes

categories.forEach(category => {
  createPage({
    path: "/" + category.relativePath + "/",
    component: categoryTemplate,
    context: {
      category: category.relativePath,
    },
  })
})
```

The category template is at `src/templates/categoryTemmplate.js`. The template needs to list the recipes that are included in the category. Since these are markdown files, I'm using the `allMdx` query to pull them in, filtering on the category, and sorting by title.
