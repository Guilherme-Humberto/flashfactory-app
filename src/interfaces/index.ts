export interface IFlashcard {
  front: string
  back: string
  status: string
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
