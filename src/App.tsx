import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import './global.css';

import clipboard from './assets/clipboard.svg';
import { Header } from './components/Header';

export function App() {

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.newTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>Criar <PlusCircle size={20}></PlusCircle></button>
        </div>

        <div className={styles.taskContent}>
          <header className={styles.headerList}>
            <aside>
              <p className={styles.info}>Tarefas criadas </p>
              <span className={styles.roudedCount}>0</span>
            </aside>
            <aside>
              <p className={styles.done}>Concluidas</p>
              <span className={styles.roudedCount}>0</span>
            </aside>
          </header>

          <div className={styles.emptyContent}>
            <img src={clipboard} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
