import  Head  from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
  return(
    <>
    <Head>
      <title>Post | Ignews </title>
    </Head>

    <main className={styles.conainer}>
      <div className={styles.posts}>
        <a>
          <time>12 de Março de 2021</time>
          <strong>Sometimes the name of a proposed feature (a method, a global variable, etc.) clashes with existing code and has to be changed. This blog post explains how that can happen and lists features that were renamed.</strong>
        </a>
        <a>
          <time>12 de Março de 2021</time>
          <strong>Sometimes the name of a proposed feature (a method, a global variable, etc.) clashes with existing code and has to be changed. This blog post explains how that can happen and lists features that were renamed.</strong>
        </a>
        <a>
          <time>12 de Março de 2021</time>
          <strong>Sometimes the name of a proposed feature (a method, a global variable, etc.) clashes with existing code and has to be changed. This blog post explains how that can happen and lists features that were renamed.</strong>
        </a>
      </div>
    </main>
    </>

  );
}