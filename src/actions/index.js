export const LOAD_DATA = "LOAD_DATA";
export const LOAD_MORE = "LOAD_MORE";
export const PUT_DATA = "PUT_DATA";
export const PUT_MORE = "PUT_MORE";
export const SHOW_ERROR = "SHOW_ERROR";

export const putData = (data) => {
    const upcomingItems = data.data.filter((item) => item.upcoming);
    const historyItems = data.data.filter((item) => !item.upcoming);
    return {
        type: PUT_DATA,
        payload: {
            upcoming: upcomingItems,
            history: historyItems
        }
    }
}


export const showError = () => {
    return {
        type: SHOW_ERROR,
    }
}
export const putMore = (data) => {
    console.log(data.data)
    return {
        type: PUT_MORE,
        payload: data.data
    }
}

export const loadData = () => {
    return {
        type: LOAD_DATA
    }
}

export const loadMore = () => {
    return {
        type: LOAD_MORE
    }
}
