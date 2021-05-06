import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="about">
      <div className="jumbotron jumbotron-fluid text-white">
        <div className="" align="center">
          <h1 className="display-4">We're the MAVEN</h1>
          <p className="lead">
          To provide details of faculties & staffs of different universities 
          </p>
        </div>
      </div>

      <div className="">
        <div className="mb-4 d-flex justify-content-center mt-2 mx-auto" align="center">
          <h2 className="text-primary">Why MAVEN?</h2>
        </div>
        <div className="m-5" align="center">
          <div className="">
            <h5>Verified profiles</h5>
            <img
              src="https://img.icons8.com/ios/100/000000/verified-account.png"
              width="20%"
              alt="img"
            ></img>
            <p>
            Our aim is to provide 100% Verified profiles, so that users can get verified and reliable informations.{" "}
            </p>
          </div>
          <div className="">
            <h5>Collabration is power</h5>
            <img
              src="https://image.flaticon.com/icons/svg/265/265663.svg"
              width="20%"
              alt="img"
            ></img>
            <p>
            We believe in the power of individuals coming together.Our mission is to expand our directory as much as possible. After becoming part of our family
             you can get more opportunities acording to your profession from different organisations. It also helps
             all the bright students to get access to your profile and to collaborate with you.{" "}
            </p>
          </div>
          <div className="">
            <h5>Our Members are our family</h5>
            <img
              src="https://image.flaticon.com/icons/svg/265/265668.svg"
              width="20%"
              alt="img"
            ></img>
            <p>
            We strive to maintain top of the line customer service because our  members are our first priority. We care about members so much and 
            we ensure them their data is encrypted and no one can change thier data. We encourage you to become part 
            of our family.{" "}
            </p>
          </div>
        </div>

        <div className="x">
          <div className="p-5 m-5 mx-auto" align="center">
            <h2 className="text-primary">Why We Do It</h2>
          </div>

          <div className="px-5">
            <p>
              Our main motto is to provide directory of faculties & staffs of 
              multiple universities at one website to our customers.So that
              our custmores can easily get data about any faculty at one website instead of visiting 
              many universities' website.
            </p>

            <p>
              {" "}
              We believe that valid and 100% correct details about professors is very important
              and essential for students.So that students can get correct details about professors and student doesn't get trap in any scam and able to contact them directly. 
              Our website also helps parents or guardians to choose best faculties for their children.
            </p>
            <p>
            Our management team welcome any questions or any suggestions from you. So that we can improve performance of our website.You can drop your questions and suggestions by clicking below 
              button.Your small suggestions  will help us a lot. 
            </p>
          </div>
          <div className="" align="center">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1%auto=format%fit=crop%w=774%q=80"
              width="60%"
              alt="img"
            ></img>
          </div>
        </div>
      </div>

      <div className="jumbotron jumbotron-fluid bg-light text-black">
        <div className="" align="center">
          <h3>Have More Questions/Suggestions?</h3>
          <a
            className="btn btn-outline-primary"
            href="/ContactUs"
            role="button"
            align="center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
