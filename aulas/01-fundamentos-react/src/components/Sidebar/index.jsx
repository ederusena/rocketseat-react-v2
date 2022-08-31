import styles from "./index.module.css";
import capaImg from "../../assets/capa.avif";
import profileImg from "../../assets/ederperfil.jpg";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capaImg} />

      <div className={styles.profile}>
        <img src={profileImg} />
        <strong>Eder Soares</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
