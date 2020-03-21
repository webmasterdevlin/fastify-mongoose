import * as controller from "../controllers/villain.controller";
import { RouteOptions } from "fastify";
import { schema } from "./documentation/villain.api.schema";

const getVillainsRoute: RouteOptions = {
  method: "GET",
  url: "/api/villains",
  handler: controller.getVillains
};

const deleteVillainRoute: RouteOptions = {
  method: "DELETE",
  url: "/api/villains/id",
  handler: controller.deleteVillain
};

const postVillainRoute: RouteOptions = {
  method: "POST",
  url: "/api/villains",
  handler: controller.addVillain,
  schema
};

const putVillainRoute: RouteOptions = {
  method: "PUT",
  url: "/api/villains/:id",
  handler: controller.updateVillain
};

const getVillainByIdRoute: RouteOptions = {
  method: "GET",
  url: "/api/villains/:id",
  handler: controller.getVillainById
};

const villainRoutes: any[] = [
  getVillainsRoute,
  deleteVillainRoute,
  postVillainRoute,
  putVillainRoute,
  getVillainByIdRoute
];

export default villainRoutes;
