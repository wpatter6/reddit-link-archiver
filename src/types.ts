import { SnooStormOptions } from "snoostorm";
import { SnoowrapOptions } from "snoowrap";

export interface RedditLinkArchiverSettings {
  credentials: SnoowrapOptions,
  settings: SnooStormOptions,
  subreddits: string[],
  posts: string[]
}