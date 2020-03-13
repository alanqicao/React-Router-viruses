import React from 'react';
import { Button, Header, Icon, Segment, } from "semantic-ui-react";
import VirusForm from './VirusForm';

export default class EditVirus extends React.Component{

    state ={ editing: false}

    toggleEdit = () => this.setState({ editing: !this.state.editing})
    
  render(){
    return(

      <Segment style={{ ...styles, display: "flex", alignItems: "center", justifyContent: "space-between" }} >
        {
          this.state.editing ?
            <VirusForm { ...this.props } toggleEdit={this.toggleEdit} />
          :
            <div>
              <Header as="h3">{this.props.name}</Header>
              <p> {this.props.description} </p>
            </div>
        }
        <div>
          <Button icon color="green" onClick={this.toggleEdit}>
            Edit
          </Button>
        </div>
      </Segment>
    )

  }
}

const styles= {
  padding: '5px', border:'1px solid', color: 'red',
}