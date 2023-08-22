import mrequest from '@/utils/mock-request'
// import request from '@/utils/request'
import defaultSettings from '@/settings'
const { publicPath } = defaultSettings

export function login(data) {
  return mrequest({
    url: publicPath + `data/user.json`,
    method: 'get',
    data
  })
}

export function getInfo(token) {
  return mrequest({
    url: publicPath + `data/userinfo.json`,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return mrequest({
    url: '/user/logout',
    method: 'post'
  })
}
