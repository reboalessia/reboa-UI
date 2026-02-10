import { useState } from 'react';
import styles from './Slider.module.css';

export interface SliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
  label?: string;
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  defaultValue = 50,
  step = 1,
  label = 'Value',
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number((e.target as HTMLInputElement).value);
    setValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={styles.slider}
          style={{
            background: `linear-gradient(to right, #FF36AB 0%, #642CA9 ${percentage}%, #FFDDE1 ${percentage}%, #FFDDE1 100%)`,
          }}
        />
        <div className={styles.sliderTrack}>
          <div
            className={styles.sliderFill}
            style={{ width: `${percentage}%` }}
          />
          <div
            className={styles.sliderThumb}
            style={{ left: `${percentage}%` }}
          />
        </div>
      </div>
      <div className={styles.minMaxLabels}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};
