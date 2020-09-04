import React, { Component } from "react";
import { connect } from "react-redux";
import "./TodoList.scss";
import { add, del } from "../../redux/actions/todoList";
import { GroupSalesDetailsDeptList } from "@/api/test";

@connect(state => ({
  num: state.num
}))
class TodoList extends Component {
  UNSAFE_componentWillMount() {
    console.log(123);
    this.testAxios();
  }
  testAxios() {
    GroupSalesDetailsDeptList().then(res => {
      console.log(res);
    });
  }
  add() {
    this.props.dispatch(add({ type: "ADD", n: this.input.value })); // this.props = store
  }
  del() {
    this.props.dispatch(del({ type: "DEL", n: this.input.value }));
  }
  render() {
    return (
      <div>
        <h1>{this.props.num}</h1>
        <input
          placeholder="你想做点什么"
          className="todo-input"
          ref={dom => (this.input = dom)}
        />
        <button type="submit" className="todo-btn" onClick={() => this.add()}>
          add
        </button>
        <button type="submit" className="todo-btn" onClick={() => this.del()}>
          del
        </button>
      </div>
    );
  }
}

export default TodoList;
