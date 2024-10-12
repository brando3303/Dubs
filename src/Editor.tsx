import React, { ChangeEvent, Component } from 'react';
import { Location, Marker, COLORS } from './marker';
import { BUILDINGS, Building } from './buildings';
// TODO: add imports as needed

type EditorProps = {
  /** The marker that the user wants to edit. */
  marker: Marker;

  /** If provided, let the user move to this location. */
  moveTo?: Location; // Note: not needed until task 3

  /** Callback to invoke when the user wants to cancel editing. */
  onCancelClick: () => void;

  /** Calback to invoke when the user wants to save the edit. */
  onSaveClick: (name: string, color: string, loc: Location) => void;
};

type EditorState = {
  name: string;
  color: string;
  building: Building | undefined;
  filter: string;
  checked: boolean;
};


/** Component that allows the user to edit a marker. */
export class Editor extends Component<EditorProps, EditorState> {

  //buildingOptions : Building[];

  constructor(props: EditorProps) {
    super(props);
    this.state = {name: props.marker.name, color: props.marker.color, building: this.getBuilding(), filter: "", checked: true};
  }

  getBuilding = () : Building | undefined => {
    let building: Building | undefined = undefined;
    for (const b of BUILDINGS){
      if(b.location == this.props.marker.location){
        building = b;
      }
    }
    return building;
  }

  componentDidUpdate = (oldProps: EditorProps, _oldState: EditorState): void => {
    
    // If the App changed our props (so we are now editing a new Marker), then
    // we should update our state to show its name and color instead.
    if (oldProps !== this.props) {
      console.log("here");
      this.setState({name: this.props.marker.name, color: this.props.marker.color, building: this.getBuilding(), filter: "", checked: true});
    }
  };

  render = (): JSX.Element => {
    console.log(`state: ${this.state.color}, ${this.state.name}`);
    return <div>
      <div>
        <label>
          Name: <input type="text" value={this.state.name} onChange={this.doNameChange}></input>
        </label>
      </div>
      <div>
        <label>
          Color: 
          <select value={this.state.color} onChange={this.doColorChange}>
            {COLORS.map((option, index) => (<option key={index} value={option}>{option}</option>))}
          </select>
        </label>
      </div>

      {this.props.moveTo === undefined ? this.renderBuildingMove() : this.renderMarkerMove()}
    </div>;
  };

  renderBuildingMove = () : JSX.Element => {
    return <div>
      <label>
      Move to: 
      <select value={this.state.building === undefined ? "current location" : this.state.building.longName} onChange={this.doLocationChange}>
        {BUILDINGS.sort((a : Building,b: Building) => {return a.longName.localeCompare(b.longName)}).map((building, index) => 
          {
            if(building.longName.toLowerCase().includes(this.state.filter.toLowerCase())){
              return <option key={index} value={building.longName}>{building.longName}</option>
            } else {return;}
          })
        }
          <option value={"current location"}>current location</option>
      </select>
    </label>
    <label>
      Filter: <input type="text" value={this.state.filter} onChange={this.doFilterChange}></input>
    </label>
    <input type="button" value="save" onClick={()=>this.props.onSaveClick(this.state.name,
              this.state.color,this.state.building ? this.state.building.location:this.props.marker.location)}></input>
    <input type="button" value="cancel" onClick={this.props.onCancelClick}></input>
  </div>
  }

  renderMarkerMove = () : JSX.Element => {
    return <div>
      <label>
        <input type="checkbox" id={"checked"} checked={this.state.checked} onChange={this.doCheckedChange}></input> Move to new location?
      </label>
      <input type="button" value="save" onClick={()=>this.props.onSaveClick(this.state.name,
              this.state.color,this.props.moveTo && this.state.checked ? this.props.moveTo : this.props.marker.location)}></input>
      <input type="button" value="cancel" onClick={this.props.onCancelClick}></input>
    </div>
  }

  doNameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({name:evt.target.value});
  }

  doColorChange =  (evt: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({color:evt.target.value});
  }

  doLocationChange =  (evt: ChangeEvent<HTMLSelectElement>): void => {
    console.log(evt.target.value);
    if(evt.target.value === "current location"){
      this.setState({building: undefined});
    } else{
      this.setState({building: BUILDINGS[evt.target.options.selectedIndex]});
    }
  }

  doFilterChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({filter:evt.target.value});
  }

  doCheckedChange = (_evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({checked:!this.state.checked});
  }
}