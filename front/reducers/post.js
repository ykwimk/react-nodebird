const initialState = {
  mainPosts: []
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

      }
    }

    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [ action.data, ...state.mainPosts ]
      }
    }
  }
}