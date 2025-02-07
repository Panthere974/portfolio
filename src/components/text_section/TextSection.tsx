import classNames from "classnames";
import styles from "./TextSection.module.scss";

interface TextSectionProps {
  title : string;
  titleSize: "small" | "medium" | "large";
  paragraph : string;
  centerTextAlign? : boolean;
}

function TextSection({title, titleSize = "small", paragraph, centerTextAlign = false} : TextSectionProps) {

  return (
    <section className={classNames(styles.text_section, {[styles.center_text_align]: centerTextAlign})}>
      <h2 className={classNames(styles.text_section_title, {
          [styles.small]: titleSize === "small",
          [styles.medium]: titleSize === "medium",
          [styles.large]: titleSize === "large",
        })}>{title}</h2>
      <p className={styles.text_section_paragraph}>{paragraph}</p>
    </section>
  )
}

export default TextSection
