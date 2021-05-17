import { Game } from './Game'
import { Prize } from './Prize'

// i really dislike that a domain entity has reference to the outside (e.g URLs), but for the sake of brevity i'll leave it here

export interface Tournament {
  title: string
  description: string
  startDate: Date
  endDate: Date
  players: number
  prizePool: string
  backgroundImage: string
  terms: string[]
  prizeList: Prize[]
  games: Game[]
}
