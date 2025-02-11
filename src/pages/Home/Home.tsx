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
          paragraph="sur OpenClassrooms"
          centerTextAlign={true}>
        </TextSection>
        <div className={styles.projects_cards}>
          <Card 
            title="Site de location immobilière"
            subtitle="Créez une application web avec React"
            paragraph="Projet de création d'une application de location immobilière avec React, permettant de configurer la navigation avec React Router et d'initialiser l'application via Create React App. Ce projet a permis de développer des compétences dans la création de composants React réutilisables, la gestion des états d'une application, ainsi que la mise en place d'une interface utilisateur dynamique et fonctionnelle."
            image="/image/custom-software.jpeg"
            imageAlt="Description de l'image"
            githubProjectLink="https://github.com/Panthere974/projet-5"
            option="project_card">
          </Card>
          <Card 
            title="Back-end d'un site de notation de livres"
            subtitle="Créez un système de gestion de données"
            paragraph="Projet de mise en œuvre d'un système de gestion de données conforme à la réglementation, permettant d'implémenter un modèle logique de données robuste. Ce projet a permis de développer des compétences dans la création et la gestion d'opérations CRUD (création, lecture, mise à jour, suppression) sécurisées, ainsi que dans la mise en place de pratiques de stockage de données sécurisé, garantissant la protection et la confidentialité des informations sensibles."
            image="/image/custom-software.jpeg"
            imageAlt="Description de l'image"
            githubProjectLink="https://github.com/Panthere974/projet-6"
            option="project_card">
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
