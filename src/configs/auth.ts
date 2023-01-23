import qs from 'querystring'

const googleOptions = {
  redirect_uri: process.env.GOOGLE_AUTH_CALLBACK_URL,
  client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
  access_type: 'offline',
  response_type: 'code',
  promp: 'consent',
  scope: ['profile', 'email'].join(' ')
}

export const googleBaseUrl = () => {
  const queryOptions = qs.stringify(googleOptions)
  return `https://accounts.google.com/o/oauth2/v2/auth?${queryOptions}`
}

export const githubBaseUrl = () => {
  const clientId = process.env.GITHUB_AUTH_CLIENT_ID
  return `https://github.com/login/oauth/authorize?client_id=${clientId}`
}
