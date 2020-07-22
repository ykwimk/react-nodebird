const dummyUser = {
  nickname: 'ykwimk',
  post: [],
  followings: [],
  followers: [],
  signUpData: {},
}

//store (초기값)
export const initialState = {
  isLogin: false,
  user: {},
}

//action의 이름
export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const LOG_IN = 'LOG_IN'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'
export const LOG_OUT = 'LOG_OUT'

//실제 action
export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data,
  }
}
export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
}
export const loginAction = {
  type: LOG_IN,
}
export const loginSuccess = {
  type: LOG_IN_SUCCESS,
}
export const loginFail = {
  type: LOG_IN_FAIL
}
export const logoutAction = {
  type: LOG_OUT,
}

//reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLogin: true,
        user: dummyUser,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLogin: false,
        user: {}
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;