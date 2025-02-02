import React from "react";
import { FaArrowRight, FaPython } from "react-icons/fa6";
import styles from "../stylings/HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/studyPython");
    }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2>
          Learn Python <FaPython className={styles.pythonIcon} />
        </h2>
        <p>
          Welcome to the Python Learning App, a platform designed to help you
          master Python. Whether you're just starting
          or looking to advance your skills, our app offers a variety of
          interactive lessons and solutions to your various doubts regarding python to enhance your coding
          experience.
        </p>
        <p>
          The app is built with a user-friendly interface, providing you with
          personalized content and real-time feedback. You get the feature of learning
          with our four tutors python, robot, wizard and alien. Our design approach is
          centered around simplicity, accessibility, and engagement, ensuring
          that you stay motivated and on track as you progress through your
          learning path.
        </p>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={handleNext}>
            Start Learning
            <FaArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
