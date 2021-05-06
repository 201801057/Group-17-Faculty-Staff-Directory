import React, { useEffect, useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { db } from '../../firebase.js';
import firebase from 'firebase/app'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddIcon from '@material-ui/icons/Add'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const options = ['DAIICT', 'NIRMA', 'PDPU', 'MIT', 'ABC'];

const allSpecialization = ['math', 'software', 'development', 'engineer', 'tech', 'managment', 'biology']

const allAchi = ['achi1', 'achi2', 'achi3', 'achi4', 'achi5', 'achi6', 'achi7']

const allCourses = ['math', 'software', 'development', 'engineer', 'tech', 'managment', 'biology']

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
    publication: ["", "", ""],
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
  const [university, setUniversity] = useState(user.university);
  const [achievements, setAchievements] = useState(user.achievements);
  const [specialization, setSpecialization] = useState(user.specialization);
  const [contact, setContact] = useState(user.contact);
  const [courses, setCourses] = useState(user.courses);
  const [facebook, setFacebook] = useState(user.facebook);
  const [instagram, setInstagram] = useState(user.instagram);
  const [linkedin, setLinkedin] = useState(user.linkedin);
  const [twitter, setTwitter] = useState(user.twitter);
  const [researchwork, setResearchwork] = useState(user.researchwork);
  const [img, setImg] = useState();
  const [imgURL, setImgUrl] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [publication1, setPublication1] = useState(user.publication[0]);
  const [publication2, setPublication2] = useState(user.publication[1]);
  const [publication3, setPublication3] = useState(user.publication[2]);

  useEffect(() => {
    db.collection("Prof").where("email", "==", currentUser.email).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    });
    firebase.storage().ref('Prof/' + user.id + "/Profile.jpg").getDownloadURL().then(x => {
      setImgUrl(x)
      console.log("before upload", x)
    })

    setAbout(user.about);
    setAddress(user.address);
    setName(user.name);
    setUniversity(user.university);
    setAchievements(user.achievements);
    setSpecialization(user.specialization);
    setContact(user.contact);
    setCourses(user.courses);
    setFacebook(user.facebook);
    setInstagram(user.instagram);
    setLinkedin(user.linkedin);
    setTwitter(user.twitter);
    setResearchwork(user.researchwork);
    setPublication1(user.publication[0]);
    setPublication2(user.publication[1]);
    setPublication3(user.publication[2]);
  }, [user.id]);

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
      publication: [publication1, publication2, publication3]
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
      console.log(emailRef.current.value)
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
      firebase.storage().ref('Prof/' + user.id + '/Profile.jpg').put(img).then(() => {
        promises.push(true);
        console.log("profile picture uploaded")
        firebase.storage().ref('Prof/' + user.id + '/Profile.jpg').getDownloadURL().then(x => {
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


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center" style={{
      margin: "30px"
    }}>
      <div className="border border-secondary" style={{ minWidth: "0" }}>
        <h2 className="text-center mb-5 pb-3 pt-2 mt-3 bg-secondary">Update Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form style={{ padding: "10px" }} onSubmit={handleSubmit} >

          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              type="text"
              onChange={(e) => { setName(e.target.value) }}
              defaultValue={user.name}
            />
          </FormControl>


          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="EmailIcon">Email</InputLabel>
            <Input
              id="EmailIcon"
              startAdornment={
                <EmailIcon position="start">
                  <AccountCircle />
                </EmailIcon>
              }
              type="email"
              inputProps={{ ref: emailRef }}
              required
              defaultValue={currentUser.email}
            />
          </FormControl>


          {/* <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
          </Form.Group> */}

          {/* <br /> */}

          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              inputProps={{ ref: passwordRef }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </Form.Group> */}


          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="standard-adornment-repassword">Re-enter Password</InputLabel>
            <Input
              id="standard-adornment-repassword"
              type="password"
              inputProps={{ ref: passwordConfirmRef }}
            />
          </FormControl>

          {/* <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
            />
          </Form.Group> */}

          <h2 className="text-center mb-5 pt-2 pb-3 mt-5 bg-secondary">Contact</h2>

          <Autocomplete
            inputValue={university || ""}
            onChange={(event, university) => {
              setUniversity(university);
            }}
            id="controllable-states-demo"
            options={options}
            style={{ margin: "20px" }}
            renderInput={(params) => <TextField {...params} label="Select university" variant="outlined" />}
            value={university}
          />

          <PhoneInput style={{ margin: "20px" }}
            country={'in'}
            value={contact}
            onChange={(e) => setContact(e)}
            placeholder="+91 12345 67890"
          />

          <Form.Group id="address" style={{ margin: "20px" }}>
            <Form.Control
              style={{ height: "100px" }}
              as="textarea"
              raw={5}
              onChange={(e) => { setAddress(e.target.value) }}
              value={address || "Address"}
            />
          </Form.Group>

          <Button
            color="primary"
            variant="outlined"
            onClick={(e) => { history.push('/add-exp') }}
          >
            <AddIcon />
            Upadte Experience
          </Button>

          <h2 className="text-center mb-3 pt-2 mt-5 pb-3 bg-secondary">Skills</h2>

          <Autocomplete
            style={{ margin: "20px" }}
            multiple
            onChange={(event, courses) => {
              setCourses(courses);
            }}
            id="tags"
            options={allCourses}
            getOptionLabel={(option) => option}
            value={courses}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="courses"
                placeholder="courses"
              />
            )}
          />

          <Autocomplete
            style={{ margin: "20px" }}
            multiple
            onChange={(event, specialization) => {
              setSpecialization(specialization);
            }}
            id="tags-standard"
            options={allSpecialization}
            getOptionLabel={(option) => option}
            value={specialization}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Specialization"
                placeholder="Specialization"
              />
            )}
          />
          <Autocomplete
            style={{ margin: "20px" }}
            multiple
            onChange={(event, achievements) => {
              setAchievements(achievements);
            }}
            id="tags-standard-tags"
            options={allAchi}
            getOptionLabel={(option) => option}
            value={achievements}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Achievements"
                placeholder="Achievements"
              />
            )}
          />


          <InputLabel>Publication</InputLabel>
          <Input
            className="m-2"
            id="publi1"
            startAdornment={
              <InputAdornment position="start">
                <MenuBookIcon />
              </InputAdornment>
            }
            type="text"
            onChange={(e) => setPublication1(e.target.value)}
            value={publication1}
          />
          <Input
            className="m-2"
            id="publi2"
            startAdornment={
              <InputAdornment position="start">
                <MenuBookIcon />
              </InputAdornment>
            }
            type="text"
            onChange={(e) => setPublication2(e.target.value)}
            value={publication2}
          />
          <Input
            className="m-2"
            id="publi3"
            startAdornment={
              <InputAdornment position="start">
                <MenuBookIcon />
              </InputAdornment>
            }
            type="text"
            onChange={(e) => setPublication3(e.target.value)}
            value={publication3}
          />

          <Form.Group id="about-change">
            <Form.Label>About</Form.Label>
            <Form.Control
              style={{ height: "100px" }}
              as="textarea"
              raw={3}
              onChange={(e) => { setAbout(e.target.value) }}
              value={about}
            />
          </Form.Group>


          {/* <Form.Group id="contact">
            <Form.Label>Contact</Form.Label>
            <Form.Control

              onChange={(e) => { setContact(e.target.value) }}
              defaultValue={user.contact}
            />
          </Form.Group> */}


          {/* <Form.Group id="name">
            <Form.Label>Name</Form.Label>
            <Form.Control

              onChange={(e) => { setName(e.target.value) }}
              defaultValue={user.name}
            />
          </Form.Group> */}


          {/* <Form.Group id="university">
            <Form.Label>university</Form.Label>
            <Form.Control

              onChange={(e) => { steUniversity(e.target.value) }}
              defaultValue={user.university}
            />
          </Form.Group> */}


          {/* <Form.Group id="achievements">
            <Form.Label>achievements</Form.Label>
            <Form.Control

              onChange={(e) => { setAchievements(e.target.value) }}
              defaultValue={user.achievements}
            />
          </Form.Group> */}



          {/* <Form.Group id="specialization">
            <Form.Label>specialization</Form.Label>
            <Form.Control

              onChange={(e) => { setSpecialization(e.target.value) }}
              defaultValue={user.specialization}
            />
          </Form.Group> */}


          {/* <Form.Group id="experience">
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
          </Form.Group> */}

          {/* <Form.Group id="publication">
            <Form.Label>publication</Form.Label>
            <Form.Control

              onChange={(e) => { setPublication(e.target.value) }}
              defaultValue={user.publication}
            />
          </Form.Group> */}

          {/* <Form.Group id="courses">
            <Form.Label>courses</Form.Label>
            <Form.Control

              onChange={(e) => { setCourses(e.target.value) }}
              defaultValue={user.courses}
            />
          </Form.Group> */}

          <h2 className="text-center mb-3 pt-2 mt-5 pb-3 bg-secondary">Social</h2>

          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="facebook">facebook</InputLabel>
            <Input
              id="facebook"
              startAdornment={
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              }
              type="text"
              onChange={(e) => { setFacebook(e.target.value) }}
              value={facebook}
            />
          </FormControl>

          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="insta">instagram</InputLabel>
            <Input
              id="insta"
              startAdornment={
                <InputAdornment position="start">
                  <InstagramIcon />
                </InputAdornment>
              }
              type="url"
              onChange={(e) => { setInstagram(e.target.value) }}
              value={instagram}
            />
          </FormControl>

          {/* <br /> */}

          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="linkedin">linkedin</InputLabel>
            <Input
              id="linkedin"
              startAdornment={
                <InputAdornment position="start">
                  <LinkedInIcon />
                </InputAdornment>
              }
              type="url"
              onChange={(e) => { setLinkedin(e.target.value) }}
              defaultValue={user.linkedin}
            />
          </FormControl>

          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="twit">twitter</InputLabel>
            <Input
              id="twit"
              startAdornment={
                <InputAdornment position="start">
                  <TwitterIcon />
                </InputAdornment>
              }
              type="url"
              onChange={(e) => { setTwitter(e.target.value) }}
              value={twitter}
            />
          </FormControl>

          {/* <br /> */}

          <FormControl style={{ margin: "20px" }}>
            <InputLabel htmlFor="res">researchwork</InputLabel>
            <Input
              id="res"
              startAdornment={
                <InputAdornment position="start">
                  <InsertLinkIcon />
                </InputAdornment>
              }
              type="url"
              onChange={(e) => { setResearchwork(e.target.value) }}
              value={researchwork}
            />
          </FormControl>

          <hr />

          <Form.Group id="img">
            <Form.Label><h3 className="bg-secondary p-2">Profile picture</h3></Form.Label>
            <Form.Control
              type="file"
              onChange={e => {
                setImg(e.target.files[0])
                setImgUrl(URL.createObjectURL(e.target.files[0]))
              }}
            />
            <img style={{ width: "150px" }} src={imgURL} alt="loading..." />
          </Form.Group>

          <br />
          <br />
          <hr />

          <Button
            className="m-2"
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary">
            Submit
          </Button>
          <Button
            className="m-2"
            color="secondary"
            variant="outlined"
            onClick={() => {
              history.push('/show-profile')
            }}
          >
            Cancel
                </Button>
        </Form>
      </div>
    </div >
  )
}
