import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { db } from '../../firebase.js'
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
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['DAIICT', 'NIRMA', 'PDPU', 'MIT', 'ABC'];

const allSpecialization = ['math', 'software', 'development', 'engineer', 'tech', 'managment', 'biology']

const allAchi = ['achi1', 'achi2', 'achi3', 'achi4', 'achi5', 'achi6', 'achi7']

const allCourses = ['math', 'software', 'development', 'engineer', 'tech', 'managment', 'biology']


export default function UpdateProfile() {

    const { currentUser } = useAuth()
    const [img, setImg] = useState()
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
        img: ""
    })
    const history = useHistory()

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
    const [publication1, setPublication1] = useState(user.publication[0]);
    const [publication2, setPublication2] = useState(user.publication[1]);
    const [publication3, setPublication3] = useState(user.publication[2]);
    const [experience, setExperience] = useState(user.experience);
    const [year, setYear] = useState(user.year);



    useEffect(() => {
        db.collection("Prof").where("email", "==", currentUser.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        });

        firebase.storage().ref('Prof/' + user.id + "/Profile.jpg").getDownloadURL().then(x => {
            setImg(x)
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
        setExperience(user.experience);
        setYear(user.year);

    }, [currentUser.email, user.id]);



    function handleSubmit(e) {
        e.preventDefault()
        history.push("/update-profile")
    }

    return (
        <div className="d-flex flex-wrap justify-content-center" style={{
            margin: "30px"
        }}>
            <div className="border border-secondary" style={{ minWidth: "0" }}>
                <h2 className="text-center mb-5 pb-3 pt-2 mt-3 bg-secondary">Your Profile</h2>
                <Form style={{ padding: "10px" }} onSubmit={handleSubmit}>

                    <FormControl style={{ margin: "20px" }} disabled>
                        <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            type="text"
                            value={name}
                        />
                    </FormControl>


                    <FormControl style={{ margin: "20px" }} disabled>
                        <InputLabel htmlFor="EmailIcon">Email</InputLabel>
                        <Input
                            id="EmailIcon"
                            startAdornment={
                                <EmailIcon position="start">
                                    <AccountCircle />
                                </EmailIcon>
                            }
                            type="email"
                            required
                            value={currentUser.email}
                        />
                    </FormControl>


                    {/* <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    value={currentUser.email}
                  />
                </Form.Group> */}

                    {/* <br /> */}

                    {/* <FormControl style={{ margin: "20px" }}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type='password'
                        />
                    </FormControl> */}

                    {/* <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group> */}


                    {/* <FormControl style={{ margin: "20px" }}>
                        <InputLabel htmlFor="standard-adornment-repassword">Re-enter Password</InputLabel>
                        <Input
                            id="standard-adornment-repassword"
                            type="password"

                        />
                    </FormControl> */}

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
                        disabled
                        id="controllable-states-demo"
                        options={options}
                        style={{ margin: "20px" }}
                        renderInput={(params) => <TextField {...params} label="university" variant="outlined" />}
                        value={university}
                    />



                    <PhoneInput style={{ margin: "20px" }}
                        disabled
                        country={'in'}
                        placeholder="+91 12345 67890"
                        value={contact}
                    />

                    <Form.Group id="address" style={{ margin: "20px" }}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            disabled
                            style={{ height: "100px" }}
                            as="textarea"
                            raw={5}
                            value={address || "Address"}
                        />
                    </Form.Group>


                    <h2 className="text-center mb-3 pt-2 mt-5 pb-3 bg-secondary">Skills</h2>

                    <Autocomplete
                        disabled
                        style={{ margin: "20px" }}
                        multiple
                        id="tags-standard"
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
                        disabled
                        style={{ margin: "20px" }}
                        multiple

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
                        disabled
                        style={{ margin: "20px" }}
                        multiple

                        id="tags-standard"
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


                    <Form.Group id="about-change">
                        <Form.Label>About</Form.Label>
                        <Form.Control
                            disabled
                            style={{ height: "100px" }}
                            as="textarea"
                            raw={5}
                            value={about}
                        />
                    </Form.Group>



                    <h2 className="text-center mb-3 pt-2 mt-5 pb-3 bg-secondary">Experience</h2>

                    <InputLabel>Experience</InputLabel>

                    {experience && experience.map((exp, index) => {
                        return <div>
                            <Input
                                disabled
                                className="m-2"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <WorkIcon />
                                    </InputAdornment>
                                }
                                type="text"
                                value={exp}
                            />
                            <Input
                                disabled
                                className="m-2"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <HourglassEmptyIcon />
                                    </InputAdornment>
                                }
                                type="text"
                                value={year[index]}
                            />
                        </div>
                    })}


                    <InputLabel> Publication</InputLabel>
                    <Input
                        disabled
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
                        disabled
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
                        disabled
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


                    {/* <Form.Group id="contact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setContact(e.target.value) }}
                    value={user.contact}
                  />
                </Form.Group> */}


                    {/* <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setName(e.target.value) }}
                    value={user.name}
                  />
                </Form.Group> */}


                    {/* <Form.Group id="university">
                  <Form.Label>university</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { steUniversity(e.target.value) }}
                    value={user.university}
                  />
                </Form.Group> */}


                    {/* <Form.Group id="achievements">
                  <Form.Label>achievements</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setAchievements(e.target.value) }}
                    value={user.achievements}
                  />
                </Form.Group> */}



                    {/* <Form.Group id="specialization">
                  <Form.Label>specialization</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setSpecialization(e.target.value) }}
                    value={user.specialization}
                  />
                </Form.Group> */}




                    {/* <Form.Group id="experience">
                  <Form.Label>experience</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setExperience(e.target.value) }}
                    value={user.experience}
                  />
                </Form.Group>
      
                <Form.Group id="year">
                  <Form.Label>year</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setYear(e.target.value) }}
                    value={user.year}
                  />
                </Form.Group> */}

                    {/* <Form.Group id="publication">
                  <Form.Label>publication</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setPublication(e.target.value) }}
                    value={user.publication}
                  />
                </Form.Group> */}

                    {/* <Form.Group id="courses">
                  <Form.Label>courses</Form.Label>
                  <Form.Control
      
                    onChange={(e) => { setCourses(e.target.value) }}
                    value={user.courses}
                  />
                </Form.Group> */}

                    <h2 className="text-center mb-3 pt-2 mt-5 pb-3 bg-secondary">Social</h2>

                    <FormControl style={{ margin: "20px" }} disabled>
                        <InputLabel htmlFor="facebook">facebook</InputLabel>
                        <Input
                            id="facebook"
                            startAdornment={
                                <InputAdornment position="start">
                                    <FacebookIcon />
                                </InputAdornment>
                            }
                            type="url"

                            value={facebook}
                        />
                    </FormControl>

                    <FormControl style={{ margin: "20px" }} disabled>
                        <InputLabel htmlFor="insta">instagram</InputLabel>
                        <Input
                            id="insta"
                            startAdornment={
                                <InputAdornment position="start">
                                    <InstagramIcon />
                                </InputAdornment>
                            }
                            type="url"

                            value={instagram}
                        />
                    </FormControl>

                    {/* <br /> */}

                    <FormControl style={{ margin: "20px" }} disabled>
                        <InputLabel htmlFor="linkedin">linkedin</InputLabel>
                        <Input
                            id="linkedin"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LinkedInIcon />
                                </InputAdornment>
                            }
                            type="url"
                            value={linkedin}
                        />
                    </FormControl>

                    <FormControl style={{ margin: "20px" }} disabled>
                        <InputLabel htmlFor="twit">twitter</InputLabel>
                        <Input
                            id="twit"
                            startAdornment={
                                <InputAdornment position="start">
                                    <TwitterIcon />
                                </InputAdornment>
                            }
                            type="url"
                            value={twitter}
                        />
                    </FormControl>

                    {/* <br /> */}

                    <FormControl style={{ margin: "20px" }} disabled>
                        <InputLabel htmlFor="res">researchwork</InputLabel>
                        <Input
                            id="res"
                            startAdornment={
                                <InputAdornment position="start">
                                    <InsertLinkIcon />
                                </InputAdornment>
                            }
                            type="url"
                            value={researchwork}
                        />
                    </FormControl>

                    <hr />

                    {img && <img style={{ width: "150px" }} src={img} alt="loading..."></img>}

                    <br />
                    <br />
                    <hr />
                    <Button type="submit" variant="contained" color="primary">
                        Update Profile
                  </Button>
                </Form>
            </div>
        </div >

    )
}

