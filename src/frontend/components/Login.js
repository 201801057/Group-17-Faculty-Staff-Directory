import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./styles.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch (err) {
      setError(err.message)
    }

    setLoading(false)
  }

  return (
    <div className="w-100 d-flex justify-content-center" style={{
      marginTop: "30px"
    }}>
      <div className="border">
        <h2 className="text-center mb-4">Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control className="w-90" type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control className="w-90" type="password" ref={passwordRef} required />
          </Form.Group>
          <Button disabled={loading} type="submit">
            Log In
            </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/CreateAccount">Sign Up</Link>
        </div>
      </div>
    </div >
  )
}