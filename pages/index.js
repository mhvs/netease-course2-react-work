
import Link from 'umi/link';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Link to="/InputNumber">go to /InputNumber</Link>
    </div>
  );
}
