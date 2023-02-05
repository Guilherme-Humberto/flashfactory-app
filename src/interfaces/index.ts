export interface ITag {
  id?: number
  title: string
  color: string
}

export interface IFlashcard {
  id: number
  front: string
  back: string
  status: string
  tags: ITag[]
  created_at: string
  updated_at: string
}

export interface IDeck {
  id: number
  title: string
  description: string
  status: number
  created_at: string
  updated_at: string
  flashcards: IFlashcard[]
}

export interface IPagination {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export interface ISelect {
  label: string
  value: string | boolean
}
