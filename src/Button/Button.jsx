import styles from './Button.module.css'
//We use CSS Modules to keep styles local to a component and avoid global CSS name conflicts.
function Button(){
    return(
        <button className={styles.button}>Click Me</button>
    );
}
export default Button