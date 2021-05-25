import faker from "faker";
import productModel from "../model/product.js";
import CommentModel from "../model/comment.js";


const productResolver = function () {};
productResolver.fakeData = productModel.ProductTC.addResolver({
  name: "product",
  type: productModel.ProductTC,
  args: { record: productModel.ProductTC.getInputType() },
  resolve: async ({ source, args }) => {
    let ecommerce=faker.commerce
   let fakeCategory=ecommerce.department()
    if(fakeCategory.includes("Shirt")) fakeCategory= "STYLE"
    else if(fakeCategory.includes("Home")) fakeCategory="FOOD"
    else if(fakeCategory.includes("Outdoors")) fakeCategory= "TECH"
    else if(fakeCategory.includes("Outdoors")) fakeCategory= "SPORT"
    else fakeCategory= "OTHER"

    let product = new productModel.ProductSchema({
      name:ecommerce.product() ,
      createdAt: faker.date.recent(),
      description: ecommerce.productDescription(),
      price: ecommerce.price(),
      comments: new CommentModel.CommentSchema({
        title:ecommerce.product() ,
        body: ecommerce.productDescription(),
        star: faker.datatype.number({
          'min': 1,
          'max': 5
        }),
        date: faker.date.recent()
      }),
      category: fakeCategory  ,
      star: faker.datatype.number({
        'min': 1,
        'max': 5
      }),
    });
    return await product.save();
  },
});

export default  productResolver;
