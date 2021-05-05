import React, { useRef, useState } from "react"
import { Form, Button, Alert, InputGroup, FormControl } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./styles.css"
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

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
    <div className="w-90 d-flex justify-content-center" style={{
      margin: "30px"
    }}>
      <div className="border">
        <h1 className="bg-secondary text-center mb-3 text-light pb-2">Log In</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form style={{ padding: "30px" }} onSubmit={handleSubmit}>
          <InputGroup className="mb-5">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><EmailIcon /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="email"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              ref={emailRef}
            />
          </InputGroup>

          <InputGroup className="mb-5">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon2"><LockIcon /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
              ref={passwordRef}
            />
          </InputGroup>
          {/* <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="email" ref={emailRef} aria-describedby="basic-addon1" required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <FormControl type="password" ref={passwordRef} required />
          </Form.Group> */}
          <Button disabled={loading} type="submit" className="mb-2">
            Log In
            </Button>
        </Form>

        <hr />
        <div className="w-100 text-center mt-2 mb-3">
          Don't have an account? <Link to="/CreateAccount">Sign-Up </Link>
        </div>

        <div className="w-100 text-center mt-3 mb-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

      </div>
    </div >
  )
}