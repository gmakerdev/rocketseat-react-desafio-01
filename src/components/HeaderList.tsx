import styles from './HeaderList.module.css';

interface Props {
    tasksCreated: number;
    tasksDone: number;
}

export function HeaderList({ tasksCreated, tasksDone}: Props) {
    return (
        <header className={styles.headerList}>
            <aside>
                <p className={styles.info}>Tarefas criadas </p>
                <span className={styles.roudedCount}>{tasksCreated}</span>
            </aside>
            <aside>
                <p className={styles.done}>Concluidas</p>
                <span className={styles.roudedCount}>{tasksDone === 0 ? tasksDone : `${tasksDone} de ${tasksCreated}`}</span>
            </aside>
        </header>
    )
}