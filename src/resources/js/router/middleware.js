import UserHasPermissions from './middleware/UserHasPermissions'
import RedirectIfAuthenticated from './middleware/RedirectIfAuthenticated'

export default function middleware (router) {
    UserHasPermissions(router);
    // RedirectIfAuthenticated(router);
}
