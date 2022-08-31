import styles from './index.module.css';
import profileImg from '../../assets/ederperfil.jpg';

export function Post(props) {
  const { author, content } = props;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={profileImg} />
          <div className={styles.authorInfo}>
            <strong>Eder Sena</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='31 de agosto às 14:24' dateTime='2022-08-31 14:23:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href=''>jane.design/doctorcare</a>
        </p>

        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
