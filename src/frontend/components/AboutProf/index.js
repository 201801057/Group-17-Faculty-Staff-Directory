import React, { useEffect, useState } from "react";
import "./styles.css";
import { db } from "../../../firebase.js";
import firebase from 'firebase/app'


export default function ProfileCard(props) {
  const [a, setA] = useState(true);
  const [e, setE] = useState(false);
  const [c, setC] = useState(false);
  const [s, setS] = useState(false);
  const [p, setP] = useState(false);
  const [cr, setCr] = useState(false);
  const [ac, setAc] = useState(false);
  const [img, setImg] = useState();

  const [userDetails, setUserDetails] = useState('')

  useEffect(() => {
    db.collection('Prof').doc(props.searchName).get()
      .then(snapshot => setUserDetails(snapshot.data()))

    firebase.storage().ref('Prof/' + userDetails.id + "/Profile.jpg").getDownloadURL().then(x => {
      setImg(x)
      console.log(x)
    })

  }, [props.searchName, userDetails.id]);

  return (
    <div className="proff-card">
      <div
        className={"card " + (a ? "is-active" : "") + (a ? "" : " top-sm")}
        data-state="#about"
      >
        <div className="card-header">
          <div className="card-cover"></div>

          <img
            className="card-avatar"
            src={img || "https://2.bp.blogspot.com/-b_lqelKRB4k/Xj-rBvoSxUI/AAAAAAAACHg/G19lzRiO6qYQmquCqut44r1cMdF53HQ0QCLcBGAsYHQ/s1600/anime3.png"}
            alt="avatar"
          />

          <h1 className="card-fullname">{userDetails.name}</h1>

          <h2 className="card-jobtitle">{userDetails.university}</h2>
        </div>

        <div className="card-main">
          <div
            className={
              "card-section " + (a ? "is-active" : "") + (a ? "" : " top-sm")
            }
            id="about"
          >
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>

              <p className="card-desc">
                {userDetails.about}
              </p>
            </div>

            <div className="card-social">
              <a href={userDetails.facebook} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                </svg>
              </a>

              <a href={userDetails.twitter} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                </svg>
              </a>

              <a href={userDetails.instagram} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />

                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />

                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                </svg>
              </a>

              <a href={userDetails.linkedin} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={
              "card-section " + (e ? "is-active" : "") + (a ? "" : " top-sm")
            }
            id="experience"
          >
            <div className="card-content">
              <div className="card-subtitle">WORK EXPERIENCE</div>

              <div className="card-timeline">
                {userDetails.experience && userDetails.experience.map((d, i) => {
                  return (
                    <div key={i} className="card-item" data-year={userDetails.year && userDetails.year[i]}>
                      <div className="card-item-title">
                        {d}
                      </div>
                    </div>
                  );
                }).reverse()}
              </div>
            </div>
          </div>

          <div
            className={
              "card-section " + (c ? "is-active" : "") + (a ? "" : " top-sm")
            }
            id="contact"
          >
            <div className="card-content">
              <div className="card-subtitle">CONTACT</div>

              <div className="card-contact-wrapper">
                <a href={"https://www.google.co.in/maps/search/" + userDetails.address} target="_blank" rel="noopener noreferrer"><div className="card-contact">
                  <a href={"https://www.google.co.in/maps/search/" + userDetails.address} target="_blank" rel="noopener noreferrer"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />

                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  </a>
                  {userDetails.address}
                </div>
                </a>

                <a href={"tel:" + userDetails.contact}><div className="card-contact">
                  <a href={"tel:" + userDetails.contact}>
                    <svg
                      className="card-cont"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </a>
                  {userDetails.contact}
                </div>
                </a>

                <a href={userDetails.researchwork}><div className="card-contact">
                  <a href={userDetails.researchwork}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />

                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </a>
                  {userDetails.researchwork}
                </div>
                </a>

                <a href={"mailto:" + userDetails.email}><div className="card-contact">
                  <a href={"mailto:" + userDetails.email}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />

                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </a>
                  {userDetails.email}
                </div>
                </a>

                <a href={"mailto:" + userDetails.email}><button className="contact-me" >WORK TOGETHER</button></a>
              </div>
            </div>
          </div>

          <div
            className={
              "card-section " + (s ? "is-active" : "") + (a ? "" : " top-sm")
            }
            id="specializations"
          >
            <div className="card-content">
              <div className="card-subtitle">SPECIALIZATIONS</div>
              <ul className="spec">
                {userDetails.specialization && userDetails.specialization.map((d, i) => {
                  return (
                    <li>{d}</li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            className={
              "card-section " + (p ? "is-active" : "") + (a ? "" : " top-sm")
            }
            id="publicatios"
          >
            <div className="card-content">
              <div className="card-subtitle">PUBLICATIONS</div>
              <ul className="spec">
                {userDetails.publication && userDetails.publication.map((d, i) => {
                  return (
                    <li>{d}</li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            className={
              "card-section " + (cr ? "is-active" : "") + (a ? "" : " top-sm")
            }
            id="courses"
          >
            <div className="card-content">
              <div className="card-subtitle">COURSES</div>
              <ul className="spec">
                {userDetails.courses && userDetails.courses.map((d, i) => {
                  return (
                    <li>{d}</li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            className={
              "card-section " + (ac ? "is-active" : "") + (a ? "" : " top-sm")
            }
            id="achievements"
          >
            <div className="card-content">
              <div className="card-subtitle">ACHIEVEMENTS</div>
              <ul className="spec">
                {userDetails.achievements && userDetails.achievements.map((d, i) => {
                  return (
                    <li>{d}</li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="card-buttons">
            <button
              data-section="#about"
              onClick={() => {
                setA(true);
                setE(false);
                setC(false);
                setAc(false);
                setCr(false);
                setP(false);
                setS(false);
              }}
              className={a ? "is-active" : ""}
            >
              ABOUT
            </button>

            <button
              data-section="#experience"
              onClick={() => {
                setA(false);
                setE(true);
                setC(false);
                setAc(false);
                setCr(false);
                setP(false);
                setS(false);
              }}
              className={e ? "is-active" : ""}
            >
              EXPERIENCE
            </button>

            <button
              data-section="#courses"
              onClick={() => {
                setA(false);
                setE(false);
                setC(false);
                setAc(false);
                setCr(true);
                setP(false);
                setS(false);
              }}
              className={cr ? "is-active" : ""}
            >
              COURSES
            </button>

            <button
              data-section="#specialization"
              onClick={() => {
                setA(false);
                setE(false);
                setC(false);
                setAc(false);
                setCr(false);
                setP(false);
                setS(true);
              }}
              className={s ? "is-active" : ""}
            >
              SPECIALIZATIONS
            </button>

            <button
              data-section="#publications"
              onClick={() => {
                setA(false);
                setE(false);
                setC(false);
                setAc(false);
                setCr(false);
                setP(true);
                setS(false);
              }}
              className={p ? "is-active" : ""}
            >
              PUBLICATIONS
            </button>

            <button
              data-section="#achievements"
              onClick={() => {
                setA(false);
                setE(false);
                setC(false);
                setAc(true);
                setCr(false);
                setP(false);
                setS(false);
              }}
              className={ac ? "is-active" : ""}
            >
              ACHIEVEMENTS
            </button>

            <button
              data-section="#contact"
              onClick={() => {
                setA(false);
                setE(false);
                setC(true);
                setAc(false);
                setCr(false);
                setP(false);
                setS(false);
              }}
              className={c ? "is-active" : ""}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
