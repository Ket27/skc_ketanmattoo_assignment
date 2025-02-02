import styles from "../stylings/CardContent.module.css";

const CardContent = ({characterImages, tutor}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      Greetings, Earthling! I'm {<strong>{Object.keys(characterImages)[tutor]}</strong>}, the Python Tutor! <br/>🚀 Ready to explore the amazing world of Python programming?<br/> Whether you're just starting out or need a refresher, I'm here to guide you through the basics in a fun and easy way!
<br/>
We can start with:<br/>
1️⃣ Print Statements – Learn how to make Python talk! (Well, at least display messages on the screen.)<br/>
2️⃣ Variables – Discover how to store and manage information like a pro.<br/>
3️⃣ Basic Math – Add, subtract, multiply, and divide—Python makes calculations a breeze!<br/>
4️⃣ Fun with Strings – Play around with text, manipulate words, and even create cool patterns.<br/>

Pick a topic, and let’s begin your Python journey! 🚀🐍💡
      </div>
    </div>
  );
};

export default CardContent;
