import React from "react";
import VirusForm from './VirusForm'
import Virus from './Virus'
import EditVirus from "./EditVirus";
import {Container,Header} from "semantic-ui-react"

export default class Viruses extends React.Component{
  state = {
    viruses: [
      {id: 1, name:'Ebola', description:'Bleed out of your face'},
      {id: 2, name: 'Corona Virus', description:'Hard to breath, easy to catch'}
   ]        
  }

  getUniqId = () =>{
    return Math.floor((1+Math.random())* 0x10000)
    .toString(16)
    .substring(1);
  }



  renderViruses(){
    return this.state.viruses.map((virus)=>
      <EditVirus
        key={virus.id}
       {...virus}
        edit={this.editVirus}
        remove = {this.removeVirus}
        />
    )
  }  
  
  editVirus = (virusInfo) => {
    const viruses = this.state.viruses.map( virus => {
      if (virus.id === virusInfo.id)
        return virusInfo;
      return virus
    });
    this.setState({viruses})
  }


  addToViruses = (name, description) => {

    var newVirus= {name:name, description:description, id: this.getUniqId};
    this.setState({
      viruses: [newVirus,...this.state.viruses]
    })
  }
  
  removeVirus = (id) => {
    const viruses = this.state.viruses.filter( virus => {
      if (virus.id !== id)
        return virus
    });
    this.setState({ viruses: [...viruses], });
  };




render(){
  return(

      <Container>
        <div>
        <Header as ='h1'>Viruses</Header>
            <VirusForm addToViruses={this.addToViruses} />
        {this.renderViruses()}
        
        </div>
        </Container>
    

  )
  }

}