import Config from 'config';
import { SubmissionStream } from "snoostorm";
import Snoowrap from "snoowrap";
import { RedditLinkArchiverSettings } from './types';
import ArchiveGenerator from './archive';

const { credentials, settings, subreddits, posts } : RedditLinkArchiverSettings = Config.get('config');
const client = new Snoowrap(credentials);


const connect = () => {
  const archiveFunc = ArchiveGenerator(posts);
  return subreddits.map((subreddit) => new SubmissionStream(client, {
    subreddit,
    ...settings
  }).on("item", archiveFunc));
}

export default connect;