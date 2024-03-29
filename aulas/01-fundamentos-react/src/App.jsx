import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Eder Sena" content="React classroom" />
          <Post author="Eder Sena" content="React classroom" />
        </main>
      </div>
    </>
  );
}
