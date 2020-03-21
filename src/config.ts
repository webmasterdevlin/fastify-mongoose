/* sample env. don't push to branch sensitive details */
const env: any = {
  APP_PORT: process.env.APP_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME
};

export default env;
