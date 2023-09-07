import styles from "./index.module.css";
import profileImg from "../../assets/ederperfil.jpg";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profileImg} alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eder Sena</strong>
              <time
                title="31 de agosto às 14:24"
                dateTime="2022-08-31 14:23:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito maneiro, esse artigo</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
