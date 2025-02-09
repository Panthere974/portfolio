import TextSection from "../../components/text_section/TextSection";
import Card from "../../components/card/Card";
import styles from "./Home.module.scss";

function App() {

  return (
    <div className={styles.page}>
      <section className={styles.introduction}>
        <div className={styles.introduction_section}>
          <p>Je suis <strong>Cédric Payet</strong></p>
            <TextSection 
              title="Développeur Full Stack"
              titleSize="medium"
              paragraph="Développeur Full-Stack passionné, spécialisé en React pour des interfaces dynamiques 
                et en Node.js pour des backends performants.
                J’aime concevoir des applications modernes, optimisées et évolutives.">
            </TextSection>
        </div>
        <div className={styles.introduction_section}></div>
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
            title="Développement Front-End"
            subtitle="Développer des sites web avec React.js">
          </Card>
          <Card 
            title="Développement Front-End"
            subtitle="Développer des sites web avec React.js">
          </Card>
          <Card 
            title="Développement Front-End"
            subtitle="Développer des sites web avec React.js">
          </Card>
          <Card 
            title="Développement Front-End"
            subtitle="Développer des sites web avec React.js">
          </Card>
          <Card 
            title="Développement Front-End"
            subtitle="Développer des sites web avec React.js">
          </Card>
          <Card 
            title="Développement Front-End"
            subtitle="Développer des sites web avec React.js">
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
