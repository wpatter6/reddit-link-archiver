import Config from 'config'
import { RedditActionSettings } from 'reddit-actions'

interface ArchiverConfig extends RedditActionSettings {
  credentials: {
    userAgent: string
    clientId: string
    clientSecret: string
    refreshToken: string
  }
}

const getConfig = () => {
  return Config.get('config') as ArchiverConfig
}

export default getConfig
