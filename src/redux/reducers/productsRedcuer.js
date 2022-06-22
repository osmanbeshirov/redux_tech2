const initialProducts = ['book', 'phone', 'car', 'key'];


export const productReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case "ADD": {

            return [...state, action.payload]
        }

        case "FILTER": {
            const yeni = [...state]
            const newState = yeni.filter((item) => {
                return item.length > 3
            })

            return newState;
        }



        default:
            return state;
    }
}