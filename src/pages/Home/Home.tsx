import TextSection from "../../components/text_section/TextSection";
import styles from "./Home.module.scss";

function App() {

  return (
    <div className={styles.page}>
      <section className={styles.introduction}>
        <TextSection 
          title="Développeur Full Stack"
          paragraph="Développeur Full-Stack passionné, spécialisé en React pour des interfaces dynamiques 
            et en Node.js pour des backends performants.
            J’aime concevoir des applications modernes, optimisées et évolutives."
          showName={true}>
        </TextSection>
        <div style={{ flex: 1 }}></div>
      </section>
      <section id="about" className={styles.about}>
        <TextSection
          title="À propos de moi"
          paragraph="Développeur Full-Stack, je conçois des applications modernes et performantes 
          en mettant l'accent sur l'expérience utilisateur et l'optimisation du code. 
          Actuellement en validation de mon diplôme de Développeur Web, 
          je suis constamment à la recherche de nouvelles opportunités pour innover et relever des défis techniques.
          Parcourez mon portfolio pour découvrir mes réalisations.">
        </TextSection>
      </section>
      <section id="skills" className={styles.skills}>
        <h2 className={styles.skills_title}>Mes compétences</h2>
        <p>de Développeur Full-Stack</p>
      </section>
    </div>
  )
}

export default App
