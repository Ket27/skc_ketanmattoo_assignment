import { useState } from "react";
import styles from "../stylings/CardFooter.module.css";
import generateResponse from "../OpenAi";
import { toast, ToastContainer} from "react-toastify";

const CardFooter = () => {
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");

  const handleSend = async () => {
    toast("Input taken, wait for the response", {
      type:"success",
    })
    
    if(ques.length>0 && ques.trim()) {
      try{
        const res = await generateResponse(ques);
        setAns(res);
      }
      catch(err){
        toast("Error while fetching the response", {
          type: err,
        });
      }
    }
    else{
      toast("Ask your question",{
        type:"warning",
      })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={ques}
            onChange={(e) => setQues(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask your Python question..."
            className={styles.input}
          />
          <button onClick={handleSend} className={styles.button}>
            Send
          </button>
        </div>
        <p className={styles.ans}>{ans}</p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default CardFooter;
