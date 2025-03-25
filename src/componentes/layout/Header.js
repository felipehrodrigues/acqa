import styles from '../layout/Header.module.css'
import { Link } from 'react-router-dom'

function Header(){

    const logo = "https://uniube.br/img/landing/logo_azul.svg"
    const logoGerenciadorTarefas = "https://cdn-icons-png.flaticon.com/512/12183/12183021.png"

    return(
        <div className={styles.header}>
            <Link to="/">
            <img src={logoGerenciadorTarefas}  alt='logo gerenciardor tarefas' />
            </Link>
            <h1>Gerenciador de tarefas</h1>
            <img alt='Logo uniube' src={logo} className={styles.logo}></img>
        </div>
    )
}

export default Header