interface IAttrs {
  data: {
    attributes: { url: string }
  }
}

interface IPostProps {
  data: {
    attributes: {
      title?: string
      name?: string
    }
  }
}

export interface IBannerSlideProps {
  id: number
  url: string
  attributes: {
    url: string
  }
}

export interface IBanner {
  title: string
  attributes: {
    slug: string
    slides: { data: IBannerSlideProps[] }
  }
}

export interface IAuthor {
  id: number
  attributes: {
    name: string
    email: string
    photo: IAttrs
  }
}

export interface IPosts {
  id: number
  attributes: {
    content: string
    title: string
    createdAt: Date
    excerpt: string
    image: IAttrs
    category: IPostProps
    author: IPostProps
  }
}
