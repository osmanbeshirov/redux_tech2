import { type } from "@testing-library/user-event/dist/type";

export function filter(state) {
    const yeni = [...state];
    const newState = yeni.filter((item => {
        return item.length > 3
    }))

    return {
        type: "FILTER",
        payload: newState
    }
}

export function empty() {
    return {
        type: "EMPTY",
        payload: []
    }
}