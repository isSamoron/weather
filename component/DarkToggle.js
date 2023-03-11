import styles from '../styles/Home.module.css'

export default function DarkToggle() {
    return (
        <div>
            <div className={styles.switchHolder}>
                <div className={styles.switchLabel}>
                    <i className="fa fa-bluetooth-b"></i><span>Light Mode</span>
                </div>
                <div className={styles.switchToggle}>
                    <input type="checkbox" id="bluetooth"/>
                        <label htmlFor="bluetooth"></label>
                </div>
            </div>
        </div>
    )
}
