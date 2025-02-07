import TextSection from "../../components/text_section/TextSection";
import SkillCard from "../../components/skill_card/SkillCard";
import ProjectCard from "../../components/project_card/ProjectCard";
import styles from "./Home.module.scss";

function App() {

  return (
    <div className={styles.page}>
      <section className={styles.introduction}>
      <div style={{ flex: 1 }}>
      <p>Je suis <strong>Cédric Payet</strong></p>
        <TextSection 
          title="Développeur Full Stack"
          titleSize="medium"
          paragraph="Développeur Full-Stack passionné, spécialisé en React pour des interfaces dynamiques 
            et en Node.js pour des backends performants.
            J’aime concevoir des applications modernes, optimisées et évolutives.">
        </TextSection>
      </div>
        <div style={{ flex: 1 }}></div>
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
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
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
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </section>
    </div>
  )
}

export default App
