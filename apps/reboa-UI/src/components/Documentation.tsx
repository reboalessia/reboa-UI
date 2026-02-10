import styles from './Documentation.module.css';

export const Documentation = () => {
  return (
    <div className={styles.documentation}>
      <h2 className={styles.title}>📚 Guida Rapida</h2>
      <p className={styles.subtitle}>Come iniziare con Reboa UI</p>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Installazione</h3>
        <p className={styles.text}>
          Installa <strong>Reboa UI</strong> nel tuo progetto usando npm o pnpm:
        </p>
        <div className={styles.codeBlock}>
          <code>npm install reboa-ui</code>
        </div>
        <div className={styles.codeBlock}>
          <code>pnpm add reboa-ui</code>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Creazione Progetto con npx</h3>
        <p className={styles.text}>
          Per creare un nuovo progetto React con <strong>TypeScript</strong> usa:
        </p>
        <div className={styles.codeBlock}>
          <code>npx create-react-app my-app --template typescript</code>
        </div>
        <p className={styles.text}>
          Oppure con <strong>Vite</strong> (consigliato per performance migliori):
        </p>
        <div className={styles.codeBlock}>
          <code>npm create vite@latest my-app -- --template react-ts</code>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Utilizzo Base</h3>
        <p className={styles.text}>
          Importa i componenti che ti servono:
        </p>
        <div className={styles.codeBlock}>
          <code>
            {`import { Button, Accordion, Slider } from 'reboa-ui';`}
          </code>
        </div>
        <p className={styles.text}>
          E usali direttamente nel tuo codice:
        </p>
        <div className={styles.codeBlock}>
          <code>
            {`<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>`}
          </code>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>TypeScript</h3>
        <p className={styles.text}>
          Tutti i componenti sono <strong>completamente tipizzati</strong>. Avrai autocompletamento e type checking:
        </p>
        <ul className={styles.list}>
          <li><strong>Props tipizzate</strong> - Ogni componente ha interfacce TypeScript esportate</li>
          <li><strong>Type safety</strong> - Errori rilevati durante lo sviluppo</li>
          <li><strong>Autocompletamento</strong> - IntelliSense completo nell'editor</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Componenti Disponibili</h3>
        <ul className={styles.list}>
          <li><strong>Accordion</strong> - Sezioni espandibili per contenuti organizzati</li>
          <li><strong>Button</strong> - Pulsanti con varianti e animazioni</li>
          <li><strong>Slider</strong> - Controllo range interattivo</li>
          <li><strong>Typewriter</strong> - Effetto testo macchina da scrivere</li>
          <li><strong>SearchBar</strong> - Barra di ricerca con icone</li>
        </ul>
      </section>

      <div className={styles.footer}>
        <p>🚀 Inizia a costruire interfacce incredibili!</p>
      </div>
    </div>
  );
};
