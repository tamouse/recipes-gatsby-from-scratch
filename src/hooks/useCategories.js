import { graphql, useStaticQuery } from "gatsby"
export const useRecipeCategories = () => {
  const { allDirectory } = useStaticQuery(
    graphql`
      query RECIPE_CATEGORIES {
        allDirectory(filter: { absolutePath: { glob: "**/recipes/*" } }) {
          nodes {
            relativePath
          }
        }
      }
    `
  )
  return allDirectory.nodes.map(category => category.relativePath)
}
