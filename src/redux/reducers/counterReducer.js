const initialCounter = 0;

export const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;

        default: return state;
    }
}