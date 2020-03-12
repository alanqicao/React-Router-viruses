import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


export default class Navbar extends React.Component{
 
    state = {
      activeItem:'Home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return(
      <Menu inverted> 
{/* inverted is a props from @ https://react.semantic-ui.com/collections/menu/#types-basic */}
      <Link to='/'>
        <Menu.Item
          as='div'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
      
        >
       Home 
        </Menu.Item>
      </Link>
      <Link to='./About'>
        <Menu.Item
          as='div'
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
        </Link>

        <Link to='./Viruses'>
        <Menu.Item
          as='div'
          name='Viruses'
          active={activeItem === 'Viruses'}
          onClick={this.handleItemClick}
        >
          Viruses
        </Menu.Item>
        </Link>

    </Menu>


    )
  }
}
