import styles from './CheckBox.module.css';

function CheckBox({ marcado, onChange }) {
  return (
    <div>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={marcado}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckBox;

