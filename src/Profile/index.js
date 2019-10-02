import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Loading from '../Loading'
import RepositoryList from '../Repository'
// import ErrorMessage from '../Error'

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  query {
    products(first: 5) {
      edges {
        node {
          id
          description
        }
      }
    }
  }
`

const Profile = () => (
  <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
    {({ data, loading, errors }) => {
      if (errors) {
        return (
          <p>
            <strong>Something went wrong:</strong>
            {errors.map(error => error.message).join(' ')}
          </p>
        )
      }

      const { products } = data

      if (loading || !products) {
        return <Loading />
      }

      return (
        <div>
          {products.description}
          <RepositoryList products={products.description} />
        </div>
      )
    }}
  </Query>
)

export default Profile
