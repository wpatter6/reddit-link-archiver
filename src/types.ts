import { SnooStormOptions } from 'snoostorm'
import { SnoowrapOptions } from 'snoowrap'

export interface IRedditLinkArchiverSettings {
  credentials: SnoowrapOptions
  settings: SnooStormOptions
  subreddits: string[]
  posts: string[]
}
