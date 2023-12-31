import combineReducers from "combine-reducers";
import { categoryReducer } from "./CategoryReducer";
import { brandReducer } from "./brandReducer";
import { productReducer } from "./productReducer";
import { subCategoryReducer } from "./subCategoryReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
export const rootReducer = combineReducers({
    category: categoryReducer,
    subcategory: subCategoryReducer,
    brand: brandReducer,
    product: productReducer,
    authReducer: authReducer,
    cartReducer: cartReducer,
})