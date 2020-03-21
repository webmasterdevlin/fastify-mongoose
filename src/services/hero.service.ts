import Hero from "../models/hero.mongo.schema";
import boom from "boom";

export const heroFind = async (): Promise<any[]> => {
  try {
    const heroes = await Hero.find().exec();
    return heroes;
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const heroFindByIdAndRemove = async (id): Promise<any> => {
  try {
    // Hero.deleteOne({ _id: req.params.id }).exec(); // does not return what has been deleted
    return await Hero.findByIdAndRemove(id).exec();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const heroSave = async (body): Promise<any> => {
  try {
    return await new Hero(body).save();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const heroFindByIdAndUpdate = async (id, body): Promise<any> => {
  try {
    const updatedHero = await Hero.findByIdAndUpdate(
      id,
      { ...body },
      { new: true }
    ).exec();
    return updatedHero;
  } catch (e) {
    boom.boomify(e);
  }
};

export const heroFindById = async (id): Promise<any> => {
  try {
    const hero = await Hero.findById(id).exec();
    return hero;
  } catch (e) {
    boom.boomify(e);
  }
};
