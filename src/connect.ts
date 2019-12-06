import { SubmissionStream } from 'snoostorm'
import Snoowrap from 'snoowrap'
import ActionGenerator from './action'
import { IRedditActionSettings } from './types'

const connect = ({
  credentials,
  settings,
  subreddits,
  urls,
  titles,
  users,
}: IRedditActionSettings) => {
  const client = new Snoowrap(credentials)
  const action = ActionGenerator({ urls, titles, users })
  return subreddits.map(subreddit =>
    new SubmissionStream(client, {
      subreddit,
      ...settings,
    }).on('item', action),
  )
}

export default connect
