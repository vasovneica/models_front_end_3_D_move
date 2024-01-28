import styles from './LoaderGradient.module.css'


export const Loader = ({ addClass }) => {
    let bgStyle;
    if (addClass){
       bgStyle=styles.Loader_big
    }
    return (
        <div className={`${styles.Loader} ${styles.Loader_square} ${bgStyle}`}
            style={{
                fontSize: '2rem',
                cursor: 'pointer'
            }}
        >
        </div>
    )
}