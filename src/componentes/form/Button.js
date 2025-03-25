import styles from '../form/Button.module.css'

function Button({funcaoButton, onClick}){
    
    return(
        <button type='button' onClick={onClick} className={styles.btn}>{funcaoButton}</button>
    )
}

export default Button