import { useState } from 'react';
import styles from './app.module.css';
import { ComponentShowcase } from '../components/ComponentShowcase';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button';
import { Slider } from '../components/Slider';
import { Typewriter } from '../components/Typewriter';
import { SearchBar } from '../components/SearchBar';
import { Modal } from '../components/Modal';
import { Documentation } from '../components/Documentation';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accordionItems = [
    {
      title: 'Cos\'è Reboa UI?',
      content:
        'Reboa UI è una libreria di componenti React moderna e accessibile, progettata per aiutare gli sviluppatori a creare interfacce utente belle e funzionali in modo rapido ed efficiente.',
    },
    {
      title: 'Perché usare Reboa UI?',
      content:
        'Componenti completamente tipizzati con TypeScript, design system coerente, animazioni fluide e performance ottimizzate. Tutti i componenti sono personalizzabili e accessibili.',
    },
    {
      title: 'Come iniziare?',
      content:
        'Installa la libreria, importa i componenti che ti servono e inizia a costruire la tua applicazione. Ogni componente è documentato con esempi di codice pronti all\'uso.',
    },
  ];

  const accordionCode = `import { Accordion } from 'reboa-ui';

const items = [
  {
    title: 'Titolo 1',
    content: 'Contenuto del primo elemento'
  },
  {
    title: 'Titolo 2',
    content: 'Contenuto del secondo elemento'
  }
];

<Accordion items={items} />`;

  const buttonCode = `import { Button } from 'reboa-ui';

// Varianti disponibili: 'primary' | 'secondary' | 'outline'
// Dimensioni disponibili: 'small' | 'medium' | 'large'

<Button 
  variant="primary" 
  size="medium"
  onClick={() => console.log('Clicked!')}
>
  Click Me
</Button>`;

  const sliderCode = `import { Slider } from 'reboa-ui';

<Slider
  min={0}
  max={100}
  defaultValue={50}
  step={1}
  label="Volume"
  onChange={(value) => console.log(value)}
/>`;

  const typewriterCode = `import { Typewriter } from 'reboa-ui';

<Typewriter
  text="Benvenuto in Reboa UI!"
  speed={100}
  loop={true}
  delay={1000}
/>`;

  const searchBarCode = `import { SearchBar } from 'reboa-ui';

<SearchBar
  placeholder="Cerca componenti..."
  onSearch={(value) => console.log(value)}
/>`;

  return (
    <div className={styles.app}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Reboa UI</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Una libreria di componenti React moderna, accessibile e completamente tipizzata
          </p>
          <div className={styles.heroButtons}>
            <Button variant="primary" size="large">
              Inizia Ora
            </Button>
            <Button variant="outline" size="large" onClick={() => setIsModalOpen(true)}>
              Documentazione
            </Button>
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Documentation />
      </Modal>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Intro Section */}
          <section className={styles.intro}>
            <h2 className={styles.sectionTitle}>Cosa Offre Reboa UI?</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Veloce e Leggera</h3>
                <p>Componenti ottimizzati per le migliori performance</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔧</div>
                <h3>Personalizzabile</h3>
                <p>Ogni componente può essere adattato alle tue esigenze</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📦</div>
                <h3>TypeScript</h3>
                <p>Completamente tipizzata per un'esperienza di sviluppo migliore</p>
              </div>
            </div>
          </section>

          {/* Components Showcase */}
          <div className={styles.showcases}>
            <ComponentShowcase
              title="Accordion"
              description="Un componente accordion espandibile per organizzare i contenuti in sezioni collassabili."
              component={<Accordion items={accordionItems} />}
              code={accordionCode}
            />

            <ComponentShowcase
              title="Button"
              description="Pulsanti con diverse varianti e dimensioni, con animazioni ed effetti hover."
              component={
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              }
              code={buttonCode}
            />

            <ComponentShowcase
              title="Slider"
              description="Uno slider interattivo con design gradiente e animazioni fluide."
              component={<Slider label="Intensità" defaultValue={75} />}
              code={sliderCode}
            />

            <ComponentShowcase
              title="Typewriter"
              description="Effetto macchina da scrivere per testi animati, con opzioni di loop e velocità."
              component={
                <Typewriter
                  text="Crea interfacce incredibili con Reboa UI!"
                  speed={80}
                  loop={true}
                  delay={2000}
                />
              }
              code={typewriterCode}
            />

            <ComponentShowcase
              title="SearchBar"
              description="Una barra di ricerca elegante con animazioni e icone interattive."
              component={
                <SearchBar
                  placeholder="Cerca componenti..."
                  onSearch={(value) => console.log('Searching:', value)}
                />
              }
              code={searchBarCode}
            />
          </div>

          {/* Footer Section */}
          <section className={styles.footer}>
            <div className={styles.footerContent}>
              <h2>Pronto per iniziare?</h2>
              <p>
                Scarica Reboa UI e inizia a creare interfacce incredibili oggi stesso!
              </p>
              <Button variant="primary" size="large">
                Installa Reboa UI
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
