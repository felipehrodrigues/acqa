import styles from './../layout/Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>
                Desenvolvido por <span>Felipe Rodrigues</span> para a Avaliação Continuada Questão Aberta, do curso de <span> Análise e Desenvolvimento de Sistemas</span> da Uniube.
            </p>
        </footer>
    )
}

export default Footer