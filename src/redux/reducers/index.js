import { combineReducers } from "redux";

import { studentReducer } from "./studentsReducer";
import { productReducer } from "./productsRedcuer";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
    students: studentReducer,
    products: productReducer,
    counter: counterReducer
})

export default rootReducer;