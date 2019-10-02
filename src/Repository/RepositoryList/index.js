import React from 'react'
import RepositoryItem from '../RepositoryItem'
import '../style.css'

const RepositoryList = ({ products }) =>
products.edges.map(({ node }) => (
    <div key={node.id} className="RepositoryItem">
      <RepositoryItem {...node} />
    </div>
  ))

export default RepositoryList
