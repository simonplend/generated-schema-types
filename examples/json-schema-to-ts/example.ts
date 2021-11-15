/**
 * Define our JSON schema.
 */

const iceCreamSchema = {
  type: "object",
  properties: {
    flavour: { type: "string" },
    price: { type: "number" },
    stock: { type: "number" },
  },
  required: ["flavour", "price", "stock"],
} as const;

/**
 * Infer a type from the schema.
 */

import { FromSchema } from "json-schema-to-ts";

type IceCream = FromSchema<typeof iceCreamSchema>;

/**
 * Use the type.
 */

const iceCreamData: IceCream = {
  flavour: "Pistacho",
  price: 1.99,
  stock: null,
};

console.log({ iceCreamData });
