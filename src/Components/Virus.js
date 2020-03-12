import React from 'react';

const Virus = ({id, name, description}) => (

  <div style={ styles }>
  Name: {name} <br />
  Description: {description}
  </div>
)

const styles= {
  padding: '5px', border:'1px solid', color: 'red',
}

export default Virus
