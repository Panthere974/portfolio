import styles from "./SkillCard.module.scss";

function SkillCard() {

  return (
    <div className={styles.skill_card}>
      <strong>Développement Front-End</strong>
      <p>Développer des sites web avec React.js</p>
    </div>
  );
}

export default SkillCard;
