import productModel from "../model/product.js";
import filterModel from "../model/input.filter.types.js";
import sortModel from "../model/input.sort.types.js";
const productsResolver = function () {};
productsResolver.productFilter = productModel.ProductTC.addResolver({
    name: "productFilter",
    kind: "query",
    type: productModel.ProductTC,
    args: { filterArg: filterModel.FilterTC.getInputType(),sortArg: sortModel.SortTC.getInputType()},
    resolve: async ({ source, args }) => {
        const product = await productModel.ProductSchema.find().then(result=>{
            return result
        }).catch(err=>{

        });
        if (!product) return null;

    },
});

export default  productsResolver;
