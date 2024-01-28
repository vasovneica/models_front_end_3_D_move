import React, { useEffect } from 'react';
import { Loader } from './LoaderGradient/LoaderGradient';


export const LittleImage = ({ imageUrl }) => {

  const [loadedImg, setLoadedImg] = React.useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setLoadedImg(true)
    }
  }, []);

  const selfStyle = {
    margin: '10px',
    borderTopLeftRadius: 'var(--radius)',
    borderTopRightRadius: 'var(--radius)',
    boxShadow: 'var(--shadow)',
    height: '150px',
    objectFfit: 'cover',
    objectPposition: 'center'
  }


  return (
    <div className='little-image-wrapper'>
      {!loadedImg
        ? <Loader />
        : <img style={selfStyle}
          src={imageUrl}
        />}
    </div>
  )
}