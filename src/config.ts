import Config from 'config'
import { IRedditActionSettings } from './types'

const getConfig = () => {
  return Config.get('config') as IRedditActionSettings
}

export default getConfig
