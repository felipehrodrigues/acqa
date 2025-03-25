import styles from '../layout/Home.module.css'

function Home(){

    
    return(
        <div className={styles.home}>
            <h2>Bem vindo ao gerenciador de tarefas </h2>
            <p>Adicione suas tarefas e marque o que já foi concluído.
            </p>
        </div>
        
    )
}

export default Home