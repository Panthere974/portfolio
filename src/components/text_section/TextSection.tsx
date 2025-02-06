import styles from "./TextSection.module.scss";

interface TextSectionProps {
  title : string;
  paragraph : string;
  showName? : boolean;
}

function TextSection({title, paragraph, showName = false} : TextSectionProps) {

  return (
    <section className={styles.text_section}>
      {showName && 
        <p className={styles.text_section_name}>Je suis <strong>Cédric Payet</strong></p>
      }
      <h2 className={showName ? styles.text_section_title : styles.text_section_big_title}>{title}</h2>
      <p className={showName ? styles.text_section_paragraph : styles.text_section_paragraph_center}>{paragraph}</p>
    </section>
  )
}

export default TextSection
