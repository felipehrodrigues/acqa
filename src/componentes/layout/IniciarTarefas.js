import styles from './IniciarTarefas.module.css'
import { Link } from 'react-router-dom';

function IniciarTarefas(){
    return(
        <nav className={styles.iniciartarefas}>
                <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/AdicionarTarefas"> Clique aqui para começar
                    </Link>
                    </li>
                </ul> 
        </nav>
    )
}

export default IniciarTarefas;
