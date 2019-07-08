import PasetoAuth from "../helpers/paseto-auth"

export default (roleGuard: string[]): Function => {
  return async (req, res, next): Promise<void> => {
    if (process.env.TEST_IS_ADMIN && process.env.NODE_ENV === 'test') {
      next()
      return
    }
    
    for (let i = 0; i < roleGuard.length; i++) {
      if (await PasetoAuth.checkUserRole(roleGuard[i])) {
        next()
        return
      }
    }

    res.status(403).json({errors: {title: "Forbidden"}})
  }
}