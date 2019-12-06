import Config from 'config'
import { SubmissionStream } from 'snoostorm'
import Snoowrap from 'snoowrap'
import ArchiveGenerator from './archive'
import { IRedditLinkArchiverSettings } from './types'

const {
  credentials,
  settings,
  subreddits,
  posts,
}: IRedditLinkArchiverSettings = Config.get('config')
const client = new Snoowrap(credentials)

const connect = () => {
  const archiveFunc = ArchiveGenerator(posts)
  return subreddits.map(subreddit =>
    new SubmissionStream(client, {
      subreddit,
      ...settings,
    }).on('item', archiveFunc),
  )
}

export default connect
