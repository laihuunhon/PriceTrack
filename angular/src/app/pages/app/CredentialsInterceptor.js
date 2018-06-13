function isAPI(config, message) {
  return message.url.indexOf(config.apiUrl) === 0
}

export default function credentials(config, $log, $injector, $q) {
  'ngInject'
  return {
    request(req) {
      const Auth = $injector.get('AuthService')
      const requiresAuth = isAPI(config, req) && Auth.authData
      if (requiresAuth) {
        const { token } = Auth.authData
        req.headers.Authorization = `Bearer ${token}`
      }

      return req
    },
    responseError(res) {
      const notAuthorized = isAPI(config, res.config) && res.status === 401
      if (notAuthorized) $injector.get('AuthService').logoutCallback()

      return $q.reject(res)
    }
  }
}