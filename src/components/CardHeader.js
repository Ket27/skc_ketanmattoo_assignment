import styles from "../stylings/CardHeader.module.css";

const CardHeader = ({characterImages, tutor, setShowSettings}) => {
    const key = Object.keys(characterImages)[tutor];

    return(
        <div className={styles.cardHeaderWrapper}>
            <div className={styles.cardHeader}>
                <div className={styles.titleText}>
                    <span className={styles.character}>
                        {characterImages[key]}
                    </span>
                    <h2 className={styles.title}>
                        Your Python Tutor
                    </h2>
                </div>
                <button onClick={() => setShowSettings((prev) => prev = !prev)} className={styles.button}>
                ⚙️ Settings
                </button>
            </div>
        </div>
    )
}

export default CardHeader;