import React, { useEffect, useRef } from "react";
import f from './images/sport_demo.jpg';
import styles from './ImgWall.module.css';
import firstImg from './images/sport_demo1.jpg';
import secondImg from './images/sport_demo_fourth_var.jpg';


export const ImgWall=()=>{


    return(
      <div className={styles.img_wall_wrapper}>
<div className={styles.greeting_image}>
<h1 className={styles.greeting_text_up}>3d models for the Godot engine</h1>
  <div className={styles.greeting_text}>
    <h1>3d-mu</h1>
    <p>Welcome to our website, the ultimate destination for 3D low-poly models of transportation and more. Discover a world of beautiful, stylized models that are perfect for game development or  visualization.</p>
  </div>
</div>
    </div>         
    );
}
