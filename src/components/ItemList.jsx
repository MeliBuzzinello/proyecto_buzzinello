import React from 'react'
import Item from './Item';


function ItemList({resultado}) {
console.log(resultado)
  return (
    <div style={{ display: 'flex', margin: '20px' }}>
        {resultado?.map(resultado => <Item key={resultado.id} resultado={resultado}/>)}
    </div>
  )
}

export default ItemList;