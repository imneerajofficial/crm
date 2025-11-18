import { getModelForClass, prop } from "@typegoose/typegoose";

class User {
  @prop({ required: true }) name!: string;
  @prop({ required: true, unique: true }) email!: string;
}

export const UserModel = getModelForClass(User);
