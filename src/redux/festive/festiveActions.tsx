import {FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,} from './festiveTypes';


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

export const fetchUsersSuccess = (users:any) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

export const fetchUsersFailure = (error:any) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

export const fetchUsers = () => {
    return (dispatch:any) => {
        dispatch(fetchUsersRequest)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((response2) => {
                const users = response2.data;
                dispatch(fetchUsersSuccess(users))
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg))
            });
    };
};

