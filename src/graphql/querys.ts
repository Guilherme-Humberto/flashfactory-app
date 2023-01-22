import { gql } from '@apollo/client'

const postResponse = `
  data {
    id
    attributes {
      title
      slug
      createdAt
      excerpt
      content
      image {
        data {
          attributes {
            url
          }
        }
      }
      author {
        data {
          attributes {
            name
          }
        }
      }
      category {
        data {
          attributes {
            title
          }
        }
      }
    }
  }
`

const categoryResponse = `
  data {
    id
    attributes {
      title
      slug
      status
    }
  }
`

export const getAuthors = gql`
  query GetAllContents($status: String) {
    authors(filters: { status: { contains: $status } }) {
      data {
        id
        attributes {
          name
          email
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const getBanners = gql`
  query GetAllBanners($status: String) {
    banners(filters: { status: { contains: $status } }) {
      data {
        id
        attributes {
          title
          status
          slug
          slides {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const getPosts = gql`
  query GetAllPosts($status: String) {
    posts(filters: { status: { contains: $status } }) {
      ${postResponse}
    }
  }
`

export const getPostByCategory = gql`
  query GetPostByCategorySlug($categorySlug: String, $status: String)  {
    posts(
    filters: {
      category: { slug: { contains: $categorySlug } }
      status: { contains: $status }
    }
  ) {
      ${postResponse}
    } 
  }
`

export const getPostBySlug = gql`
  query GetPostBySlug($status: String, $slug: String) {
    posts(filters: { status: { contains: $status }, slug: { contains: $slug } }) {
      ${postResponse}
    }
  }
`

export const getCategories = gql`
  query GetAllCategories($status: String) {
    categories(filters: { status: { contains: $status } }) {
      ${categoryResponse}
    }
  }
`

export const getCategoryBySlug = gql`
  query GetCategoryBySlug($status: String, $slug: String) {
    categories(filters: { status: { contains: $status }, slug: { contains: $slug } }) {
      ${categoryResponse}
    }
  }
`
