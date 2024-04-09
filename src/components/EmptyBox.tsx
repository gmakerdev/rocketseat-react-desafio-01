import clipboard from '../assets/clipboard.svg';

import styles from './EmptyBox.module.css';

export function EmptyBox() {
    return (
        <div className={styles.emptyContent}>
            <img src={clipboard} />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}