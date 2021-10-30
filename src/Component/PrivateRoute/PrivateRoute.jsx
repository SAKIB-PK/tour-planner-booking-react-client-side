import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { FirebaseContext } from '../../Context/FirebaseAuth'
import Loading from '../Loading/Loading'

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useContext(FirebaseContext)
    if(isLoading){
      return <Loading/>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (user.email || user.displayName) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default PrivateRoute
