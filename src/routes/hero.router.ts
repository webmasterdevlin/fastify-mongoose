import * as controller from "../controllers/hero.controller";
import { RouteOptions } from "fastify";
import { schema } from "./documentation/hero.api.schema";

const getHeroesRoute: RouteOptions = {
  method: "GET",
  url: "/api/heroes",
  handler: controller.getHeroes
};

const deleteHeroRoute: RouteOptions = {
  method: "DELETE",
  url: "/api/heroes/id",
  handler: controller.deleteHero
};

const postHeroRoute: RouteOptions = {
  method: "POST",
  url: "/api/heroes",
  handler: controller.addHero,
  schema
};

const putHeroRoute: RouteOptions = {
  method: "PUT",
  url: "/api/heroes/:id",
  handler: controller.updateHero
};

const getHeroByIdRoute: RouteOptions = {
  method: "GET",
  url: "/api/heroes/:id",
  handler: controller.getHeroById
};

const heroRoutes: any[] = [
  getHeroesRoute,
  deleteHeroRoute,
  postHeroRoute,
  putHeroRoute,
  getHeroByIdRoute
];

export default heroRoutes;
