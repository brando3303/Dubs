import React, { Component, ChangeEvent, MouseEvent } from 'react';
import { TodoItem } from './todoitem';


type NewItemProps = {
    onAddClick: (item: TodoItem) => void;
    onCancelClick: () => void;
  };

type NewItemState = {
    name: string,
  };

export class NewItem extends Component<NewItemProps, NewItemState> {
  constructor(props: NewItemProps) {
    super(props);

    this.state = {name: ""};
  }

  render = (): JSX.Element => {
    return (
      <div>
        <p>Describe the item you want to add.</p>
        <p>Name:&#32;
          <input type="text" value={this.state.name}
            onChange={this.doNameChange} />
          <button type="button"
              onClick={this.doAddClick}>Add</button>
          <button type="button"
              onClick={this.doCancelClick}>Cancel</button>
        </p>
      </div>);
  };

  doNameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({name: evt.target.value});
  };

  doAddClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    // Ignore this if the user hasn't entered a name.
    if (this.state.name.trim().length > 0)
      this.props.onAddClick({name: this.state.name, completed: false});
  };

  doCancelClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onCancelClick();
  };
}