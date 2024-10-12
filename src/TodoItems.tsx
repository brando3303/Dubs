import React, { Component, ChangeEvent, MouseEvent } from 'react';
import { TodoItem } from './todoitem';


type TodoItemsProps = {
    items: Array<TodoItem>,
    onStartAdd: () => void,  // user wants to add a new item
    onItemsChanged: (items: Array<TodoItem>) => void,
  };

type TodoItemsState = {};

export class TodoItems extends Component<TodoItemsProps, TodoItemsState> {
  render = () => {
    return (
      <div>
        {this.renderInstructions()}
        {this.renderItems()}
        <p><a href="#" onClick={this.doAddClick}>Add</a> a new item.</p>
      </div>);
  }

  renderInstructions = () => {
    if (this.props.items.length === 0) {
      return <p><i>No items</i> in the list.</p>
    } else {
      return <p>Check the item to mark it completed. Check it again to remove it.</p>
    }
  };

  renderItems = () => {
    const items: JSX.Element[] = [];
    for (let i = 0; i < this.props.items.length; i++) {
      const item = this.props.items[i];
      if (item.completed) {
        items.push(
          <div key={i}>
            <input type="checkbox" id={"check" + i} checked={true}
                onChange={evt => this.doItemRemove(evt, i)}/>
            <label htmlFor={"check" + i}><s>{item.name}</s></label>
          </div>);
      } else {
        items.push(
          <div key={i}>
            <input type="checkbox" id={"check" + i} checked={false}
                onChange={evt => this.doItemCompleted(evt, i)} />
            <label htmlFor={"check" + i}>{item.name}</label>
          </div>);
      }
    }
    return items;
  };


  // Called when the user clicks on the button to add the new item.
  doAddClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    this.props.onStartAdd();
  };

  doItemCompleted = (_evt: ChangeEvent<HTMLInputElement>, index: number) => {
    const item = this.props.items[index];

    const newItems = this.props.items.slice(0, index)
        .concat([{name: item.name, completed: true}])
        .concat(this.props.items.slice(index + 1));
    this.props.onItemsChanged(newItems);
  };

  doItemRemove = (_evt: ChangeEvent<HTMLInputElement>, index: number) => {
    const newItems = this.props.items.slice(0, index)
        .concat(this.props.items.slice(index + 1));
    this.props.onItemsChanged(newItems);
  };
}