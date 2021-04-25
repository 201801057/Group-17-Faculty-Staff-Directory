import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { db } from '../../firebase.js';
import firebase from 'firebase/app'

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


    useEffect(() => {
        db.collection("Prof").where("email", "==", currentUser.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        });

        firebase.storage().ref('Prof/' + currentUser.uid + "/Profile.jpg").getDownloadURL().then(x => {
            setImg(x)
            console.log("before upload", x)
        })
    }, [currentUser.email, currentUser.uid]);



    function handleSubmit(e) {
        e.preventDefault()
        history.push("/update-profile")
    }

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="border">
                <h2 className="text-center mb-4">Your Profile</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            defaultValue={currentUser.email}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group id="about-change">
                        <Form.Label>About</Form.Label>
                        <Form.Control
                            style={{ height: "200px" }}
                            as="textarea"
                            raw={5}
                            defaultValue={user.about}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group id="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            style={{ height: "100px" }}
                            as="textarea"
                            raw={5}
                            defaultValue={user.address}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group id="contact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                            defaultValue={user.contact}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group id="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control

                            defaultValue={user.name}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="university">
                        <Form.Label>university</Form.Label>
                        <Form.Control

                            defaultValue={user.university}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="achievements">
                        <Form.Label>achievements</Form.Label>
                        <Form.Control


                            defaultValue={user.achievements}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="specialization">
                        <Form.Label>specialization</Form.Label>
                        <Form.Control


                            defaultValue={user.specialization}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="experience">
                        <Form.Label>experience</Form.Label>
                        <Form.Control


                            defaultValue={user.experience}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="year">
                        <Form.Label>year</Form.Label>
                        <Form.Control


                            defaultValue={user.year}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="publication">
                        <Form.Label>publication</Form.Label>
                        <Form.Control


                            defaultValue={user.publication}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="courses">
                        <Form.Label>courses</Form.Label>
                        <Form.Control


                            defaultValue={user.courses}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="facebook">
                        <Form.Label>facebook</Form.Label>
                        <Form.Control


                            defaultValue={user.facebook}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="instagram">
                        <Form.Label>instagram</Form.Label>
                        <Form.Control


                            defaultValue={user.instagram}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="linkedin">
                        <Form.Label>linkedin</Form.Label>
                        <Form.Control


                            defaultValue={user.linkedin}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="twitter">
                        <Form.Label>twitter</Form.Label>
                        <Form.Control


                            defaultValue={user.twitter}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group id="researchwork">
                        <Form.Label>researchwork</Form.Label>
                        <Form.Control


                            defaultValue={user.researchwork}
                            disabled
                        />
                    </Form.Group>

                    {img && <img style={{ width: "80%" }} src={img} alt="No-pic"></img>}

                    <Button type="submit">
                        Update
            </Button>
                </Form>
            </div>
        </div>
    )
}
