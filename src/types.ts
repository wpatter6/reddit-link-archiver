import { SnooStormOptions } from 'snoostorm'
import { SnoowrapOptions } from 'snoowrap'

export interface IRedditActionFilters {
  users?: string[]
  urls?: string[]
  titles?: string[]
}

export interface IRedditActionSettings extends IRedditActionFilters {
  credentials: SnoowrapOptions
  settings: SnooStormOptions
  subreddits: string[]
}
