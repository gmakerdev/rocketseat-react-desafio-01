import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import './global.css';

import logo from './assets/logo.svg';
import clipboard from './assets/clipboard.svg';

export function App() {

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="Logo TO DO list" />
      </header>
      <div>
        <main className={styles.content}>
          <div className={styles.newTask}>
            <form action="">
              <input type="text" placeholder='Adicione uma nova tarefa' /><button type='submit'>Criar <PlusCircle size={20}></PlusCircle></button>
            </form>
          </div>
          <div className={styles.contentEmpty}>
            <div className={styles.emptyTask}>
              <header>
                <span className={styles.info}>Tarefas criadas <span className={styles.roudedCount}>0</span></span>
                <span  className={styles.done}>Concluidas <span className={styles.roudedCount}>0</span></span>
              </header>

              <div className={styles.listBox}>
                <img src={clipboard} />
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
