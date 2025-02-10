import classNames from "classnames";
import TextSection from "../../components/text_section/TextSection";
import Card from "../../components/card/Card";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Home.module.scss";

function App() {

  const { isLightTheme } = useTheme();

  return (
    <div className={styles.page}>
      <section className={styles.introduction}>
        <div className={classNames(styles.introduction_section, styles.left)}>
          <p>Je suis <strong>Cédric Payet</strong></p>
            <TextSection 
              title="Développeur Full Stack"
              titleSize="medium"
              paragraph="Développeur Full-Stack passionné, spécialisé en React pour des interfaces dynamiques 
                et en Node.js pour des backends performants.
                J’aime concevoir des applications modernes, optimisées et évolutives.">
            </TextSection>
        </div>
        <div className={classNames(styles.introduction_section, styles.right)}>
          <img src={isLightTheme ? "/image/light-dev.svg" : "/image/dark-dev.svg"}/>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <TextSection
          title="À propos de moi"
          titleSize="large"
          paragraph="Développeur Full-Stack, je conçois des applications modernes et performantes 
          en mettant l'accent sur l'expérience utilisateur et l'optimisation du code. 
          Actuellement en validation de mon diplôme de Développeur Web, 
          je suis constamment à la recherche de nouvelles opportunités pour innover et relever des défis techniques.
          Parcourez mon portfolio pour découvrir mes réalisations."
          centerTextAlign={true}>
        </TextSection>
        <a 
          className={styles.about_contact_button}
          target='_blank'
          rel='noopener noreferrer'href="https://www.linkedin.com/in/c%C3%A9dric-payet/">
            Mon LinkedIn
        </a>
      </section>
      <section id="skills" className={styles.skills}>
        <TextSection
          title="Mes compétences"
          titleSize="small"
          paragraph="de Développeur Full-Stack"
          centerTextAlign={true}>
        </TextSection>
        <div className={styles.skills_cards}>
          <Card 
            title="React.js"
            subtitle="Développement d'interfaces utilisateur dynamiques et performantes">
          </Card>
          <Card 
            title="JavaScript"
            subtitle="Interactivité avancée et manipulation du DOM">
          </Card>
          <Card 
            title="Node.js"
            subtitle="Création d'APIs RESTful et gestion de bases de données">
          </Card>
          <Card 
            title="NoSQL"
            subtitle="Conception de schémas et gestion des données">
          </Card>
          <Card 
            title="Responsive Design"
            subtitle="Adaptation des sites à toutes les tailles d'écrans pour une expérience fluide">
          </Card>
        </div>
      </section>
      <section id="projects" className={styles.projects}>
        <TextSection
          title="Mes projets"
          titleSize="small"
          paragraph="de Développeur Full-Stack"
          centerTextAlign={true}>
        </TextSection>
        <div className={styles.projects_cards}>
          <Card 
            title="Développement Front-End"
            subtitle="Développer des sites web avec React.js"
            paragraph="J'aime bien ce que j'ai fait."
            image="/image/custom-software.jpeg"
            imageAlt="Description de l'image"
            option="project_card">
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
