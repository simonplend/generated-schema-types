import { Static, Type } from "@sinclair/typebox";

/**
 * Generate our JSON schema.
 */

const iceCreamSchema = Type.Object({
  flavour: Type.String(),
  price: Type.Number(),
  stock: Type.Number(),
});

console.log({ iceCreamSchema });

/**
 * Infer a type from the schema.
 */

type IceCream = Static<typeof iceCreamSchema>;

/**
 * Use the type.
 */

const iceCreamData: IceCream = {
  flavour: "Pistacho",
  price: 1.99,
  stock: null,
};

console.log({ iceCreamData });
