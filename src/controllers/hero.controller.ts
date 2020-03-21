import boom from "boom";
import { ServerResponse } from "http";
import { FastifyReply, FastifyRequest } from "fastify";
import Hero from "../models/hero.schema";
import { Document } from "mongoose";

export const getHeroes = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document[]> => {
  try {
    return await Hero.find().exec();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const deleteHero = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => {
  try {
    // Hero.deleteOne({ _id: req.params.id }).exec(); // does not return what has been deleted
    return await Hero.findByIdAndRemove(req.params.id).exec();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const addHero = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<Document> => {
  try {
    return await new Hero(req.body).save();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const updateHero = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => {
  try {
    return await Hero.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    ).exec();
  } catch (e) {
    boom.boomify(e);
  }
};

export const getHeroById = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<any> => {
  try {
    return await Hero.findById(req.params.id).exec();
  } catch (e) {
    boom.boomify(e);
  }
};
