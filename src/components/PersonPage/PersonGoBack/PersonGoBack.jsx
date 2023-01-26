import { useNavigate } from 'react-router';
import styles from './PersonGoBack.module.css'

const PersonGoBack = () => {
    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    }
    return(<>
        <div className={styles.wrapper}>
            <span className={styles.arrow}> </span>
            <a  
                href='#'
                onClick={handleGoBack}
                className={styles.link}
            >
                GoBack
            </a>
        </div>
    </>
    )
} 

export default PersonGoBack;