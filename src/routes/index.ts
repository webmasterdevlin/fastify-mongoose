import heroRoutes from "./hero.router";
import villainRoutes from "./villain.router";

const routes = [...heroRoutes, ...villainRoutes];

export default routes;
