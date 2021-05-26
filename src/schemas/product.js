import productModel from "../model/product.js";
import  "../mutation/product.mutation.js";
import  "../query/product.query.js";

const ProductQuery = {
  productById: productModel.ProductTC.getResolver("findById"),
  productByIds: productModel.ProductTC.getResolver("findByIds"),
  productOne: productModel.ProductTC.getResolver("findOne"),
  productMany: productModel.ProductTC.getResolver("findMany"),
  productCount: productModel.ProductTC.getResolver("count"),
  productConnection: productModel.ProductTC.getResolver("connection"),
  productPagination: productModel.ProductTC.getResolver("pagination"),
  products:productModel.ProductTC.getResolver("products"),
};

const ProductMutation = {
  productCreateOne: productModel.ProductTC.getResolver("createOne"),
  productCreateMany: productModel.ProductTC.getResolver("createMany"),
  productUpdateById: productModel.ProductTC.getResolver("updateById"),
  productUpdateOne: productModel.ProductTC.getResolver("updateOne"),
  productUpdateMany: productModel.ProductTC.getResolver("updateMany"),
  productRemoveById: productModel.ProductTC.getResolver("removeById"),
  productRemoveOne: productModel.ProductTC.getResolver("removeOne"),
  productRemoveMany: productModel.ProductTC.getResolver("removeMany"),
  fakeData: productModel.ProductTC.getResolver("product"),
};

export default { ProductQuery, ProductMutation };
