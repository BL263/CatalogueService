import productModel from "../model/product.js";
import filterModel from "../model/input.filter.types.js";
import sortModel from "../model/input.sort.types.js";

const productsResolver = function () {
};
productsResolver.products = productModel.ProductTC.addResolver({
    name: "products",
    kind: "query",
    type: [productModel.ProductTC],
    args: {filterArg: filterModel.FilterTC.getInputType(), sortArg: sortModel.SortTC.getInputType()},
    resolve: async ({source, args}) => {
        let product = productModel.ProductSchema.find(
            {$and: [
                {price: {$lt: args.filterArg.maxPrice}},
                    {price: {$gt: args.filterArg.minPrice}},
                    {star: {$gt: args.filterArg.minStars}},
                    {category:  args.filterArg.category}
                ]})
        if(args.sortArg.SortingValue=="price") {
            if (args.sortArg.SortingOrder == "asc")
                product.sort({price: "asc"})
            else
                product.sort({price: "desc"})
        }else if(args.sortArg.SortingValue=="createdAt")
            if (args.sortArg.SortingOrder == "asc")
                product.sort({createdAt: "asc"})
            else
               product.sort({createdAt: "desc"})

        return await product.lean().exec();

    },
});

export default productsResolver;
