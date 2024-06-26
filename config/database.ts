import { Options } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const dbConfig: Options = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
  define: {
    timestamps: true,
  },
};

export = dbConfig;
