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
  code: string
  created_at: string
  updated_at: string
  flashcards: IFlashcard[]
}
