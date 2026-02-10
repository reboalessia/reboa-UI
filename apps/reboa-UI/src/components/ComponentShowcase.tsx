import React from 'react';
import styles from './ComponentShowcase.module.css';
import { CodeBlock } from './CodeBlock';

export interface ComponentShowcaseProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  component,
  code,
}) => {
  return (
    <section className={styles.showcase}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.preview}>
          <div className={styles.previewLabel}>Anteprima</div>
          <div className={styles.componentWrapper}>{component}</div>
        </div>
        <div className={styles.codeSection}>
          <div className={styles.codeLabel}>Codice</div>
          <CodeBlock code={code} language="tsx" />
        </div>
      </div>
    </section>
  );
};
