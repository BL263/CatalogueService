import faker from "faker";
import productModel from "../model/product.js";


const resolver = function () {};
resolver.fakeData = productModel.ProductTC.addResolver({
  name: "product",
  type: productModel.ProductTC,
  args: { record: productModel.ProductTC.getInputType() },
  resolve: async ({ source, args }) => {
    let product = new productModel.ProductSchema({
      name:commerce.product() ,
      createdAt: datatype.datetime(),
      description: commerce.productDescription(),
      price: commerce.price(),
      comments: null,
      category:commerce.department() ,
      star: faker.random.number({
        'min': 1,
        'max': 5
      }),
    });
    return await product.save();
  },
});

export default  resolver;
