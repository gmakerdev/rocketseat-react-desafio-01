import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import './global.css';

import clipboard from './assets/clipboard.svg';
import { Header } from './components/Header';
import { HeaderList } from './components/HeaderList';

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
          
          <HeaderList tasksCreated={0} tasksDone={0} />

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
