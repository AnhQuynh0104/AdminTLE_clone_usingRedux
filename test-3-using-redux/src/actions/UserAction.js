import * as types from "../constants/UserConstants"
import * as UserApi from "../apis/userApi"
import { notification } from "antd"

export const getUser = () => async (dispatch) => {
  try {
    const response = await UserApi.getUser()
    dispatch({
      type: types.GET_USER,
      payload: response.data
    })
  } catch (error) {
    Promise.reject(error)
  }
}

export const addUser = (dataUser) => async (dispatch) => {
  try {
    const response = await UserApi.postUser(dataUser)
    dispatch({
      type: types.ADD_USER,
      payload: response.data
    })
    notification["success"]({
      message: "Add user successful!"
    })
  } catch (error) {
    notification["error"]({
      message: "Add user failed!"
    })
    Promise.reject(error)
  }
}

export const editUser = (dataUser) => async (dispatch) => {
  const id = dataUser.id
  try {
    await UserApi.putUser(dataUser, id)
    dispatch({
      type: types.EDIT_USER,
      payload: dataUser
    })
    notification["success"]({
      message: "Edit user successful!"
    })
  } catch (error) {
    notification["success"]({
      message: "Edit user failed!"
    })
    Promise.reject(error)
  }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserApi.deleteUser(id)
    dispatch({
      type: types.DELETE_USER,
      payload: id
    })
    notification["success"]({
      message: "Delete user successful!"
    })
  } catch (error) {
    notification["error"]({
      message: "Delete user failed!"
    })
    Promise.reject(error)
  }
}
