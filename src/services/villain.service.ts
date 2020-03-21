import Villain from "../models/villain.schema";
import boom from "boom";

export const villainFind = async (): Promise<any[]> => {
  try {
    const villains = await Villain.find().exec();
    return villains;
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const villainFindByIdAndRemove = async (id): Promise<any> => {
  try {
    // Villain.deleteOne({ _id: req.params.id }).exec(); // does not return what has been deleted
    return await Villain.findByIdAndRemove(id).exec();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const villainSave = async (body): Promise<any> => {
  try {
    return await new Villain(body).save();
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const villainFindByIdAndUpdate = async (id, body): Promise<any> => {
  try {
    const updatedVillain = await Villain.findByIdAndUpdate(
      id,
      { ...body },
      { new: true }
    ).exec();
    return updatedVillain;
  } catch (e) {
    boom.boomify(e);
  }
};

export const villainFindById = async (id): Promise<any> => {
  try {
    const villain = await Villain.findById(id).exec();
    return villain;
  } catch (e) {
    boom.boomify(e);
  }
};
