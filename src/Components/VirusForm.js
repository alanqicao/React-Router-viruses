import React from 'react'
import { Form, } from "semantic-ui-react";

export default class VirusForm extends React.Component{
    state = {name:'', description:''}

    componentDidMount(){
      if (this.props.id)
        this.setState({ name: this.props.name, body: this.props.body, })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.id){
        this.props.edit({id: this.props.id, ...this.state});
      } else{
      this.props.addToViruses(this.state.name, this.state.description);
    }
      this.setState({name:'', description:''})

    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

  render(){
    const { name, description } = this.state;

    return(
      <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            placeholder='Virus Name'
            value= {name}
            name='name'
            onChange={this.handleChange}
             /> 


          <Form.Input
                placeholder='Description'
                value= {description}
                name='description'
                onChange={this.handleChange}
                /> 
          <Form.Button type="submit" color="red" value="Submit"> Submit</Form.Button>
        </Form.Group>
      </Form>

      </div>
  
    )
  }
}