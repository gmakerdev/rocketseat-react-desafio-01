import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import './global.css';

import { Header } from './components/Header';
import { HeaderList } from './components/HeaderList';
import { EmptyBox } from './components/EmptyBox';
import { useState } from 'react';

interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<ITask[]>([{id: 1, text: "Teste", isChecked: false}, {id: 1, text: "Teste", isChecked: false}, {id: 1, text: "Teste", isChecked: true}]);

  const tasksDoneCount = tasks.reduce((previousValue, currentValue) => {
    if (currentValue.isChecked) {
      return previousValue + 1;
    }

    return previousValue;
  }, 0);

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button type='submit'>Criar <PlusCircle size={20}></PlusCircle></button>
        </div>

        <div className={styles.taskContent}>

          <HeaderList tasksCreated={tasks.length} tasksDone={tasksDoneCount} />

          <EmptyBox />
        </div>
      </section>
    </main>
  )
}
