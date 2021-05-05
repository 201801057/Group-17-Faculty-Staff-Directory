import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}


export function AdminRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser.email === "201801440@daiict.ac.in" ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
