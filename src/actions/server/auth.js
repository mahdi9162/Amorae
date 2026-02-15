'use server';

import { collections, dbConnect } from '@/app/lib/dbConnect';
import bcrypt from 'bcrypt';

export const postUser = async (payload) => {
  const { nid, name, email, phone, password } = payload;
  // check payload

  if (!email || !password) return null;

  // check user

  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) return null;

  // create user

  const newUser = {
    providerId: 'credentials',
    nid,
    name,
    email,
    phone,
    password: await bcrypt.hash(password, 14),
    role: 'user',
    createdAt: new Date(),
  };

  // insert user
  const result = await dbConnect(collections.USERS).insertOne(newUser);

  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
