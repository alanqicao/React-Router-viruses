import React from 'react'

export default class VirusForm extends React.Component{
    state = {name:'', description:''}

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addToViruses(this.state.name, this.state.description);
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
      <form onSubmit={this.handleSubmit}>
      <input required placeholder='Virus Name'
            value= {this.state.name}
            name='name'
            onChange={this.handleChange}
            
             /> 
             <br />

      <input required placeholder='Description'
            value= {this.state.description}
            name='description'
            onChange={this.handleChange}
            
             /> 
      <input type="submit" value="Submit" />
      </form>

      </div>
  
    )
  }
}