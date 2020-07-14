//store (초기값)
export const initialState = {
  isLogin: false,
  user: {
    nickname: '',
    post: [],
    followings: [],
    followers: [],
  },
}

//action의 이름
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

//실제 action
export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: 'ykwimk',
  }
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
        user: action.data
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLogin: false,
        user: {}
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