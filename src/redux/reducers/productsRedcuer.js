

const initialProducts = ['book', 'phone', 'car', 'key'];


export const productReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case "ADD": {

            return [...state, action.payload]
        }

        case "FILTER": {
            return action.payload;

        }

        case "EMPTY": {
            return action.payload;
        }



        default:
            return state;
    }
}