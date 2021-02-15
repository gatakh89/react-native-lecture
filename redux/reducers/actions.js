// 액션목록을 제어하는 리듀서
// actions.js

//ex)
// Like 목록을 제어하는 리듀서
// likes.js

const actions = (state = [], action) => {
  // action의 type별로 state 제어
  switch (action.type) {
    case 'ADD_ACTION':
      
      return[
        ...state,
        {
          ...action.payload
        }
      ]
    default:
      return state
  }
}