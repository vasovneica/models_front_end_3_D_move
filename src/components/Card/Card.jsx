import React from 'react';
import { Loader } from '../LoaderGradient/LoaderGradient';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import styles from './Card.module.css';


export const Card = (props) => {
  const [loadedImg, setLoadedImg] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const image = new Image();
    image.src = props.props.imageUrl;
    image.onload = () => {
      setLoadedImg(true)
    }
    image.onerror = () => {
      setError(true);
      console.log('error');
    }
  }, []);


  return (<>
    <div>
      {!loadedImg & !error
        ? <Loader /> : (!error ? <img className={styles.card_img} src={props.props.imageUrl} alt={props.props.title} /> : <ErrorComponent />)
      }
      <ul className={styles.card_list}>
        <h2 className={styles.model_label}>{props.props.title}</h2>
        <li className={styles.card_list_item} ><b>faces :</b>{props.props.faces}</li>
        <li className={styles.card_list_item} ><b>downloads :</b>{props.props.loadCount}</li>
      </ul>
    </div>
  </>
  )
}