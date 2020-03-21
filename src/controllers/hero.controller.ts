import { ServerResponse } from "http";
import { FastifyReply, FastifyRequest } from "fastify";
import { Document } from "mongoose";
import {
  heroFind,
  heroFindById,
  heroFindByIdAndRemove,
  heroFindByIdAndUpdate,
  heroSave
} from "../services/hero.service";

export const getHeroes = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document[]> => await heroFind();

export const deleteHero = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document> => await heroFindByIdAndRemove(req.params.id);

export const addHero = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document> => await heroSave(req.body);

export const updateHero = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document> => await heroFindByIdAndUpdate(req.params.id, req.body);

export const getHeroById = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => await heroFindById(req.params.id);
