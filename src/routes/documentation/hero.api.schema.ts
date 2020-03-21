export const schema = {
  description: "Create a new hero",
  tags: ["heroes"],
  summary: "Creates new hero with given values",
  body: {
    type: "object",
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      house: { type: "string" },
      knownAs: { type: "string" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        house: { type: "string" },
        knownAs: { type: "string" },
        __v: { type: "number" }
      }
    }
  }
};
