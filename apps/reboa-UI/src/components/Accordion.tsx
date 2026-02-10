import { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItem {
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>
            <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
              ▼
            </span>
          </button>
          <div
            className={`${styles.accordionContent} ${
              openIndex === index ? styles.accordionContentOpen : ''
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
