import React from 'react'
import '../style.css'

const RepositoryItem = ({ id, products, description}) => (
  <div>
    <div>{products && <span>Items: 
    {description}

    </span>}</div>
  </div>
)

export default RepositoryItem
