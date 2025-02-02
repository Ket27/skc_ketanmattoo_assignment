import { toast, ToastContainer } from "react-toastify";
import styles from "../stylings/Setting.module.css";

const Setting = ({characterImages, setTutor, api, setApi, setNewApi}) => {
  const handleSend = () => {
    setNewApi(api.trim());
    toast("Api Entered", {
      type:"success",
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.api}>
        <label className="label">API Key:</label>
        <input
          type="password"
          value={api}
          onChange={(e) => setApi(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className={styles.input}
          placeholder="Enter your API key"
        />
      </div>
      <div>
        <label className={styles.tutorLabel}>Choose Your Tutor:</label>
        <div className={styles.character}>
          {Object.entries(characterImages).map(([key, emoji],index) => (
            <button
              key={key}
              onClick={() => (setTutor(index))}
              className={styles.button}>
              <span className={styles.emoji}>{emoji}</span>
            </button>
          ))}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Setting;
