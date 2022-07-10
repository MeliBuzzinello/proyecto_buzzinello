import React from 'react'
import Item from './Item';


function ItemList({resulted}) {

  return (
    <div style={{ display: 'flex', margin: '20px' , flexWrap: 'wrap', justifyContent:'center'}}>
        {resulted?.map(resulted => <Item key={resulted.id} resulted={resulted}/>)}
    </div>
  )
}

export default ItemList;  