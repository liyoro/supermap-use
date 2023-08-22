import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue2 Admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
