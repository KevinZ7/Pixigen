"use server";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    console.log(newUser);
    console.log(JSON.parse(JSON.stringify(newUser)));
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
