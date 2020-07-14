export const initialState = {
  mainPosts: [{
    user: {
      id: 1,
      nickname: 'ykwimk',
    },
    content: 'asdfdasf',
  }],
  imagePaths: [],
}

const ADD_POST = 'ADD_POST'
const ADD_DUMMY = 'ADD_DUMMY'

const addPostAction = {
  type: ADD_POST,
}
const addDummyAction = {
  type: ADD_DUMMY,
  data: {
    content: 'hello',
    id: 1,
    user: {
      nickname: 'ykwimk'
    }
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      return {
        ...state
      }
    }

    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [ action.data, ...state.mainPosts ]
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