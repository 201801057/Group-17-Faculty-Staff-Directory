import React, { useEffect, useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from '../../firebase.js';
import firebase from 'firebase/app'

export default function UpdateProfile() {

  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    id: "",
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
  })
  const history = useHistory()

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [about, setAbout] = useState(user.about);
  const [address, setAddress] = useState(user.address);
  const [name, setName] = useState(user.name);
  const [university, steUniversity] = useState(user.university);
  const [achievements, setAchievements] = useState(user.achievements);
  const [specialization, setSpecialization] = useState(user.specialization);
  const [contact, setContact] = useState(user.contact);
  const [experience, setExperience] = useState(user.experience);
  const [publication, setPublication] = useState(user.publication);
  const [courses, setCourses] = useState(user.courses);
  const [facebook, setFacebook] = useState(user.facebook);
  const [instagram, setInstagram] = useState(user.instagram);
  const [linkedin, setLinkedin] = useState(user.linkedin);
  const [twitter, setTwitter] = useState(user.twitter);
  const [researchwork, setResearchwork] = useState(user.researchwork);
  const [year, setYear] = useState(user.year);
  const [img, setImg] = useState();
  const [imgURL, setImgUrl] = useState();

  useEffect(() => {
    db.collection("Prof").where("email", "==", currentUser.email).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    });
    firebase.storage().ref('Prof/' + currentUser.uid + "/Profile.jpg").getDownloadURL().then(x => {
      setImgUrl(x)
      console.log("before upload", x)
    })
  }, [currentUser.email, currentUser.uid]);

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")


    if (passwordRef.current.value) {
      updatePassword(passwordRef.current.value).then(() => {
        promises.push(true);
        console.log("password updated")
      }).catch((error) => {
        promises.push(false);
        setError(error.message)
        console.error(error.message)
      })
    }

    db.collection('Prof').doc(user.id).update({
      about: about
    })
      .then(() => {
        promises.push(true);
        console.log("about successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("Error writing about", error);
      });

    db.collection('Prof').doc(user.id).update({
      address: address
    })
      .then(() => {
        promises.push(true);
        console.log("address successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("Error writing address", error);
      });

    db.collection('Prof').doc(user.id).update({
      contact: contact
    })
      .then(() => {
        promises.push(true);
        console.log("contact successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing contact", error);
      });

    db.collection('Prof').doc(user.id).update({
      name: name
    })
      .then(() => {
        promises.push(true);
        console.log("name successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing name", error);
      });

    db.collection('Prof').doc(user.id).update({
      university: university
    })
      .then(() => {
        promises.push(true);
        console.log("uni successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing uni", error);
      });


    db.collection('Prof').doc(user.id).update({
      achievements: achievements
    })
      .then(() => {
        promises.push(true);
        console.log("achi successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing achi", error);
      });

    db.collection('Prof').doc(user.id).update({
      specialization: specialization
    })
      .then(() => {
        promises.push(true);
        console.log("spec successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing spec", error);
      });

    db.collection('Prof').doc(user.id).update({
      experience: experience
    })
      .then(() => {
        promises.push(true);
        console.log("exp successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing exp", error);
      });


    db.collection('Prof').doc(user.id).update({
      year: year
    })
      .then(() => {
        promises.push(true);
        console.log("year successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing year", error);
      });


    db.collection('Prof').doc(user.id).update({
      publication: publication
    })
      .then(() => {
        promises.push(true);
        console.log("publi successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing publi", error);
      });

    db.collection('Prof').doc(user.id).update({
      courses: courses
    })
      .then(() => {
        promises.push(true);
        console.log("course successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing course", error);
      });


    db.collection('Prof').doc(user.id).update({
      facebook: facebook
    })
      .then(() => {
        promises.push(true);
        console.log("facebook successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing facebook", error);
      });

    db.collection('Prof').doc(user.id).update({
      instagram: instagram
    })
      .then(() => {
        promises.push(true);
        console.log("insta successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing insta", error);
      });


    db.collection('Prof').doc(user.id).update({
      linkedin: linkedin
    })
      .then(() => {
        promises.push(true);
        console.log("linkedin successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing linkedin", error);
      });


    db.collection('Prof').doc(user.id).update({
      twitter: twitter
    })
      .then(() => {
        promises.push(true);
        console.log("twitter successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing twitter", error);
      });


    db.collection('Prof').doc(user.id).update({
      researchwork: researchwork
    })
      .then(() => {
        promises.push(true);
        console.log("research successfully written!");
      })
      .catch((error) => {
        promises.push(false);
        console.error("error writing research", error);
      });


    if (emailRef.current.value !== currentUser.email) {
      db.collection('Prof').doc(user.id).update({ email: emailRef.current.value })
        .then(() => {
          promises.push(true);
          console.log("email successfully written!");
        })
        .catch((error) => {
          if (error) promises.push(false);
          if (error) console.error("Error writing email: ", error);
        });
      updateEmail(emailRef.current.value).then(() => {
        promises.push(true);
        console.log("email updated")
      }).catch((error) => {
        promises.push(false);
        setError(error.message)
        console.error(error.message)
      })
    }

    if (img) {
      firebase.storage().ref('Prof/' + currentUser.uid + '/Profile.jpg').put(img).then(() => {
        promises.push(true);
        console.log("profile picture uploaded")
        firebase.storage().ref('Prof/' + currentUser.uid + '/Profile.jpg').getDownloadURL().then(x => {
          setImgUrl(x)
          console.log("after upload: ", x)
        })
      }).catch((error) => {
        promises.push(false);
        setError(error.message)
        console.error(error.message)
      })
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="border">
        <h2 className="text-center mb-4">Update Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
            />
          </Form.Group>
          <Form.Group id="about-change">
            <Form.Label>About</Form.Label>
            <Form.Control
              style={{ height: "200px" }}
              as="textarea"
              raw={5}
              onChange={(e) => { setAbout(e.target.value) }}
              defaultValue={user.about}
            />
          </Form.Group>
          <Form.Group id="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              style={{ height: "100px" }}
              as="textarea"
              raw={5}
              onChange={(e) => { setAddress(e.target.value) }}
              defaultValue={user.address}
            />
          </Form.Group>
          <Form.Group id="contact">
            <Form.Label>Contact</Form.Label>
            <Form.Control

              onChange={(e) => { setContact(e.target.value) }}
              defaultValue={user.contact}
            />
          </Form.Group>
          <Form.Group id="name">
            <Form.Label>Name</Form.Label>
            <Form.Control

              onChange={(e) => { setName(e.target.value) }}
              defaultValue={user.name}
            />
          </Form.Group>

          <Form.Group id="university">
            <Form.Label>university</Form.Label>
            <Form.Control

              onChange={(e) => { steUniversity(e.target.value) }}
              defaultValue={user.university}
            />
          </Form.Group>

          <Form.Group id="achievements">
            <Form.Label>achievements</Form.Label>
            <Form.Control

              onChange={(e) => { setAchievements(e.target.value) }}
              defaultValue={user.achievements}
            />
          </Form.Group>

          <Form.Group id="specialization">
            <Form.Label>specialization</Form.Label>
            <Form.Control

              onChange={(e) => { setSpecialization(e.target.value) }}
              defaultValue={user.specialization}
            />
          </Form.Group>

          <Form.Group id="experience">
            <Form.Label>experience</Form.Label>
            <Form.Control

              onChange={(e) => { setExperience(e.target.value) }}
              defaultValue={user.experience}
            />
          </Form.Group>

          <Form.Group id="year">
            <Form.Label>year</Form.Label>
            <Form.Control

              onChange={(e) => { setYear(e.target.value) }}
              defaultValue={user.year}
            />
          </Form.Group>

          <Form.Group id="publication">
            <Form.Label>publication</Form.Label>
            <Form.Control

              onChange={(e) => { setPublication(e.target.value) }}
              defaultValue={user.publication}
            />
          </Form.Group>

          <Form.Group id="courses">
            <Form.Label>courses</Form.Label>
            <Form.Control

              onChange={(e) => { setCourses(e.target.value) }}
              defaultValue={user.courses}
            />
          </Form.Group>

          <Form.Group id="facebook">
            <Form.Label>facebook</Form.Label>
            <Form.Control

              onChange={(e) => { setFacebook(e.target.value) }}
              defaultValue={user.facebook}
            />
          </Form.Group>

          <Form.Group id="instagram">
            <Form.Label>instagram</Form.Label>
            <Form.Control

              onChange={(e) => { setInstagram(e.target.value) }}
              defaultValue={user.instagram}
            />
          </Form.Group>

          <Form.Group id="linkedin">
            <Form.Label>linkedin</Form.Label>
            <Form.Control

              onChange={(e) => { setLinkedin(e.target.value) }}
              defaultValue={user.linkedin}
            />
          </Form.Group>

          <Form.Group id="twitter">
            <Form.Label>twitter</Form.Label>
            <Form.Control

              onChange={(e) => { setTwitter(e.target.value) }}
              defaultValue={user.twitter}
            />
          </Form.Group>

          <Form.Group id="researchwork">
            <Form.Label>researchwork</Form.Label>
            <Form.Control

              onChange={(e) => { setResearchwork(e.target.value) }}
              defaultValue={user.researchwork}
            />
          </Form.Group>

          <Form.Group id="img">
            <Form.Label>Profile picture</Form.Label>
            <Form.Control
              type="file"
              onChange={e => {
                setImg(e.target.files[0])
                setImgUrl(URL.createObjectURL(e.target.files[0]))
              }}
            />
            <img style={{ width: "80%" }} src={imgURL} alt="No-pic" />
          </Form.Group>

          <Button disabled={loading} type="submit">
            Submit
            </Button>
        </Form>
        <div className="w-100 text-center mt-2">
          <Link to="/show-profile">Cancel</Link>
        </div>
      </div>
    </div>
  )
}
