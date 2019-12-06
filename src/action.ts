import { Submission } from 'snoowrap'
import { IRedditActionFilters } from './types'
import { log } from './util'

const seenPosts = [] as string[]

const actionGenerator = ({
  urls = [],
  titles = [],
  users = [],
}: IRedditActionFilters) => {
  const urlReg = new RegExp(urls.join('|'))
  const titleReg = new RegExp(titles.join('|'))

  return (submission: Submission) => {
    const {
      url,
      title,
      author: { name: userName },
      id,
    } = submission

    if (
      !seenPosts.includes(id) &&
      urlReg.test(url) &&
      titleReg.test(title) &&
      (!users.length || users.includes(userName))
    ) {
      seenPosts.push(id)

      log('post found', { id, url, title, userName })

      // TODO: something
    }
  }
}

export default actionGenerator
