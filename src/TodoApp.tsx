import React, { Component } from 'react';
import { TodoItem } from './todoitem';
import { NewItem } from './NewItem';
import { TodoItems } from './TodoItems';
import './TodoApp.css';


type TodoProps = {};

type TodoState = {
    items: Array<TodoItem>,
    creating: boolean,
  };

export class TodoApp extends Component<TodoProps, TodoState> {
  constructor(props: TodoProps) {
    super(props);

    this.state = {items: [], creating: false};
  }

  render = (): JSX.Element => {
    if (this.state.creating) {
      return (
        <div>
          <h2>To-Do List</h2>
          <NewItem onAddClick={this.doAddClick}
              onCancelClick={this.doCancelClick}/>
        </div>);

    } else {
      return (
        <div>
          <h2>To-Do List</h2>
          <TodoItems items={this.state.items}
              onItemsChanged={this.doItemsChanged}
              onStartAdd={this.doStartAdd}/>
        </div>);
    }
  };

  doAddClick = (item: TodoItem): void => {
    const items = this.state.items.concat([item]);
    this.setState({items: items, creating: false});
  };

  doCancelClick = (): void => {
    this.setState({creating: false});
  };

  doStartAdd = (): void => {
    this.setState({creating: true});
  };

  doItemsChanged = (newItems: Array<TodoItem>): void => {
    this.setState({items: newItems});
  };
}