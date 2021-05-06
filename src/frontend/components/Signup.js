import React, { useRef, useState } from "react"
import { Form, Button, Alert, InputGroup, FormControl } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from '../../firebase.js';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function addProftoDatabase() {
    const ref = db.collection("Prof").doc()

    ref.set({
      email: emailRef.current.value,
      name: "",
      university: "",
      achievements: [],
      specialization: [],
      contact: "",
      experience: [],
      publication: [],
      courses: [],
      about: "",
      address: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      researchwork: "",
      year: "",
      img: ""
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    ref.update({
      id: ref.id
    });
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      addProftoDatabase()
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
        <h2 className="bg-secondary text-center mb-3 text-light pb-2">Sign Up</h2>
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

          <InputGroup className="mb-5">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3"><LockIcon /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="password"
              placeholder="Re-enter Password"
              aria-label="Password"
              aria-describedby="basic-addon3"
              ref={passwordConfirmRef}
            />
          </InputGroup>

          {/* <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control className="w-90" type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control className="w-90" type="password" ref={passwordRef} required />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control className="w-90" type="password" ref={passwordConfirmRef} required />
          </Form.Group> */}
          <Button disabled={loading} className="mb-2" type="submit">
            Sign Up
            </Button>
        </Form>

        <hr />
        <div className="w-100 mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  )
}
