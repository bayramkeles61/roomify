export interface IReservations {
  id: string
  user_id: string
  room_id: string
  title: string
  start_date: number
  end_date: number
  price?: number
}

export interface IRoom {
  id: string
  room_type: string
  total_chair: number
  price: number
  owner_id: string
}

export interface IUser {
  id: string
  username: string
  image?: string
  name: string
  bio: string
  website?: string
}
