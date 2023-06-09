export type UserListItem = {
  id: number
  name: string
  image: string
  species: string
  status: string
}

export type UserDetailItem = UserListItem & {
  type: string
  gender: string
  episode: EpisodeListItem[]
}

export type EpisodeListItem = {
  id: number
  name: string
}