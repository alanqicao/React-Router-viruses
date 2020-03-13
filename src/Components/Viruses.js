import React from "react";
import VirusForm from './VirusForm'
import Virus from './Virus'
import { Container, Header,Button,Table, } from "semantic-ui-react"; 

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
    return this.state.viruses.map((virus, i)=>(
      <Virus
        key={`virusitem=${i}`}
        name = {virus.name}
        description = {virus.description}
        id = {virus.id} />
    ))
  }

  addToViruses = (name, description) => {

    var newVirus= {name:name, description:description, id: Math.floor(Math.random() * 1000000)};
    this.setState({
      viruses: [newVirus,...this.state.viruses]
    })
  }


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