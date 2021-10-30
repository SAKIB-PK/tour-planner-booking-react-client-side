import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { FirebaseContext } from '../../Context/FirebaseAuth'

const PrivateRoute = ({children,...rest}) => {
    const {user} = useContext(FirebaseContext)
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
