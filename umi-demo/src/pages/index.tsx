import styles from './index.less';

export default function IndexPage(props) {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>
        {props.children}
      </div>
    </div>
  );
}
