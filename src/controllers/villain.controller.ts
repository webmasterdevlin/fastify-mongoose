import boom from "boom";
import { ServerResponse } from "http";
import { FastifyReply, FastifyRequest } from "fastify";
import Villain from "../models/villain.schema";
import { Document } from "mongoose";

export const getVillains = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document[]> => {
  try {
    return await Villain.find().exec();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const deleteVillain = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => {
  try {
    // Hero.deleteOne({ _id: req.params.id }).exec(); // does not return what has been deleted
    return await Villain.findByIdAndRemove(req.params.id).exec();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const addVillain = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document> => {
  try {
    return await new Villain(req.body).save();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const updateVillain = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => {
  try {
    return await Villain.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    ).exec();
  } catch (e) {
    boom.boomify(e);
  }
};

export const getVillainById = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => {
  try {
    return await Villain.findById(req.params.id).exec();
  } catch (e) {
    boom.boomify(e);
  }
};
