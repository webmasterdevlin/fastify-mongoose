import { ServerResponse } from "http";
import { FastifyReply, FastifyRequest } from "fastify";
import { Document } from "mongoose";
import {
  villainFind,
  villainFindById,
  villainFindByIdAndRemove,
  villainFindByIdAndUpdate,
  villainSave
} from "../services/villain.service";

export const getVillains = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document[]> => await villainFind();

export const deleteVillain = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => await villainFindByIdAndRemove(req.params.id);

export const addVillain = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document> => await villainSave(req.body);

export const updateVillain = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => await villainFindByIdAndUpdate(req.params.id, req.body);

export const getVillainById = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => await villainFindById(req.params.id);
