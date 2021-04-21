import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="about">
      <div className="jumbotron jumbotron-fluid text-white">
        <div className="" align="center">
          <h1 className="display-4">Our Mission</h1>
          <p className="lead">
            Reinventing online shopping by enabling collaboration and empowering
            buyers.
          </p>
        </div>
      </div>

      <div className="">
        <div className="mb-4 d-flex justify-content-center mt-2 mx-auto" align="center">
          <h2 className="text-primary">Our Beliefs</h2>
        </div>
        <div className="m-5" align="center">
          <div className="">
            <h5>Collaboration is power</h5>
            <img
              src="https://image.flaticon.com/icons/svg/265/265663.svg"
              width="20%"
              alt="img"
            ></img>
            <p>
              We believe that sum of all the parts is different from the
              individual pieces. This means that as we work together, we are on
              our way to building a happier and healthier society.{" "}
            </p>
          </div>
          <div className="">
            <h5>Planning ahead</h5>
            <img
              src="https://image.flaticon.com/icons/svg/1006/1006534.svg"
              width="20%"
              alt="img"
            ></img>
            <p>
              We want to change the way people think about shopping. Planning is
              a fundamental way to be prepared for whatever life throws at you.
              If you plan ahead, you can find a lot more options and deals.{" "}
            </p>
          </div>
          <div className="">
            <h5>Customer is king</h5>
            <img
              src="https://image.flaticon.com/icons/svg/265/265668.svg"
              width="20%"
              alt="img"
            ></img>
            <p>
              We strive to maintain top of the line customer service because we
              believe in the power of individuals coming together. We don’t just
              aim to serve, but to partner with our customers.{" "}
            </p>
          </div>
        </div>

        <div className="x">
          <div className="p-5 m-5 mx-auto" align="center">
            <h2 className="text-primary">Why We Do It</h2>
          </div>

          <div className="px-5">
            <p>
              We believe individuals and small businesses are strengthened by
              coordinating with others. We value small business and the family
              unit as the foundation of society, and believe that joining with
              others helps preserve those values.
            </p>

            <p>
              {" "}
              The power of volume purchasing has generally gone to large
              companies or individuals with significant resources. We can get
              more buying power to individuals by creating groups of people and
              pooling our resources together.
            </p>
            <p>
              We also hope to join with you in having a lot of fun along the
              way. Yepple group orders can help with taking care of daily needs,
              finishing do-it-yourself projects, gathering with friends who
              share hobbies, or preparing for emergencies.
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
          <h3>Have More Questions?</h3>
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
