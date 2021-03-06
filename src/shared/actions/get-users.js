import {httpConfig} from "../utils/http-config";

export const getUsers = () => async dispatch => {
	const {data} = await httpConfig('/apis/users/');
	dispatch({type: "GET_ALL_USERS", payload: data })
};

export const getUserByUserId = (id) => async dispatch => {
	const {data} = await httpConfig(`/apis/users/${id}`);
	dispatch({type: "GET_USER_BY_USER_ID", payload: data })
};