import { useState } from "react";
import styles from "../stylings/StudyPython.module.css";
import CardHeader from "../components/CardHeader";
import Setting from "../components/Setting";
import CardContent from "../components/CardContent";
import CardFooter from "../components/CardFooter";

const characterImages = {
    python: '🐍',
    robot: '🤖',
    wizard: '🧙‍♂️',
    alien: '👾'
};

const StudyPython = () => {
    const[tutor, setTutor] = useState(0);
    const [showSettings, setShowSettings] = useState(false);
    const [api, setApi] = useState("");
    const [newApi, setNewApi] = useState("");

  return (
    <div className= {styles.container}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>Learn Python</h1>
      </div>
      
      <div className={styles.cardWrapper}>
        <div className={styles.wrapper}>
            <CardHeader characterImages={characterImages} tutor={tutor} setShowSettings={setShowSettings}/>
            {showSettings && <Setting characterImages = {characterImages} setTutor= {setTutor} api={api} setApi={setApi} setNewApi={setNewApi}/>}
            <CardContent characterImages={characterImages} tutor={tutor}/>
            <CardFooter api={api}/>
        </div>
      </div>

    </div>
  );
};

export default StudyPython;
