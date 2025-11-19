import { getModelForClass, prop } from "@typegoose/typegoose";

class Products {
  @prop({ required: true, unique: true })
  name!: string;

  @prop({ required: true })
  sku!: string;

  @prop({ required: true })
  quantity!: number;
}

export const ProductModel = getModelForClass(Products);
