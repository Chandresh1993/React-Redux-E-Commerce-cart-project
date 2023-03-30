export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const DLT = (id) => {
    return {
        type: "RAW_CART",
        payload: id
    }
}

// remove indicidual item


export const REMOVE = (iteam)=> {
    return {
        type: "RAW_ONE",
        payload: iteam
    }
}