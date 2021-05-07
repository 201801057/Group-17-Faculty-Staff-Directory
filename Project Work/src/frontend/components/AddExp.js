import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from 'react-router-dom'
import { db } from '../../firebase.js'


export default function AddExp() {

    const history = useHistory()
    const { currentUser } = useAuth()
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

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            test: [{ firstName: "", lastName: "" }]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "test"
    });


    useEffect(() => {
        db.collection("Prof").where("email", "==", currentUser.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        });
    }, [currentUser.email]);


    const onSubmit = (data) => {

        const promises = []
        const ex = []
        const ey = []

        data.test.forEach((dat) => {
            if (dat.firstName !== false && dat.lastName !== false) {
                ex.push(dat.firstName)
                ey.push(dat.lastName)
            }
        })

        console.log(data.test)
        db.collection('Prof').doc(user.id).update({
            experience: ex
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
            year: ey
        })
            .then(() => {
                promises.push(true);
                console.log("year successfully written!");
            })
            .catch((error) => {
                promises.push(false);
                console.error("error writing year", error);
            });


        // db.collection('Prof').doc(user.id).update({
        //     publication: publication
        // })
        //     .then(() => {
        //         promises.push(true);
        //         console.log("publi successfully written!");
        //     })
        //     .catch((error) => {
        //         promises.push(false);
        //         console.error("error writing publi", error);
        //     });


        Promise.all(promises)
            .then(() => {
                history.push("/update-profile")
            })
            .catch((error) => {
                console.log(error.message)
            })

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center mb-5 pb-3 pt-2 mt-3 bg-secondary">Experience</h1>
            <ul>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id} className="d-flex flex-wrap m-3 justify-content-center">
                            <input
                                placeholder="title"
                                className="m-2"
                                defaultValue={`${item.firstName}`}
                                {...register(`test.${index}.firstName`)}
                            />
                            <Controller
                                render={({ field }) =>
                                    <input {...field}
                                        className="m-2"
                                        placeholder="no. of years"
                                        type="number"
                                        min="0"
                                    />
                                }
                                name={`test.${index}.lastName`}
                                control={control}
                                defaultValue={item.lastName}
                            />
                            <Button className="m-2"
                                variant="outlined"
                                color="secondary"
                                onClick={() => remove(index)}
                            >
                                <DeleteIcon />
                            </Button>
                        </li>
                    );
                })}
            </ul>
            <section>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        append({ firstName: "", lastName: "" });
                    }}
                >
                    <AddIcon />
                </Button>
            </section>
            <section className="m-3">
                <Button
                    className="m-2"
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Submit
                </Button>

                <Button
                    className="m-2"
                    color="secondary"
                    variant="outlined"
                    onClick={() => {
                        history.push('/update-profile')
                    }}
                >
                    Cancel
                </Button>
            </section>
        </form>
    );
}
