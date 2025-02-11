import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss"

function NotFound() {
    
    return (
        <div className={styles.page}>
            <h1>404</h1>
            <p>Page non trouvée</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    )
}

export default NotFound