import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import Home from '../views/pages/home';
import NotFound from '../views/pages/404';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorites': Favorites,
  '/detail/:id': Detail,
  '/404': NotFound,
};

export default routes;
