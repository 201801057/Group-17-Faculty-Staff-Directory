import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="w-100 d-flex justify-content-center" style={{ margin: "30px" }}>
      <div>
        <h2 className="text-center mb-4">Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control className="w-90" type="email" ref={emailRef} required />
          </Form.Group>
          <Button disabled={loading} type="submit">
            Reset Password
            </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          <Link to="/login" className="border border-primary rounded">Login</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/CreateAccount">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
