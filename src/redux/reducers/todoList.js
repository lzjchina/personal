import { handleActions } from "redux-actions";

export const num = handleActions(
  {
    ADD: (state, action) => state + parseInt(action.payload.n), //action.payload  获取action对象 {type:'ADD',n:this.input.value}
    DEL: (state, action) => state - parseInt(action.payload.n)
  },
  0
);
