import { Suspense, useEffect } from 'react'
import { IoArrowBackCircle,IoDownloadSharp } from 'react-icons/io5';
import { Await, defer, Link, useAsyncValue, useLoaderData, useNavigate } from 'react-router-dom'
import Slider from '../components/Slider/Slider.jsx';
import { SpinLoader } from '../components/SpinLoader/SpinLoader.jsx';
import { downloadModel } from '../config';


const Post = () => {
    const post = useAsyncValue()
   
    return (
        <>
            <Slider images={[post.imageUrl, post.secondImageUrl]} />
        </>
    )
}

const FullPage = () => {
    const { post, _id, comments } = useLoaderData()
    const navigate = useNavigate();
    
    const goBack = () => navigate(-1);
    console.log(post);
    const handleDownloadModels = () => {
       
        fetch(downloadModel(post._id))
          .then(() => {
            window.location.href = post.modelUrl;
          })
      };

    return (
        <div className='full-page'>
           <h2>{post.title}</h2>
            <button onClick={goBack} >
            <IoArrowBackCircle />
                 </button>       
            <Suspense fallback={<SpinLoader/>}>
                <Await resolve={post}>
              
                    <Post />
                    
                </Await>
            </Suspense>
            <button onClick={handleDownloadModels} >
            <IoDownloadSharp />
                 </button>
                 <span>Downloads :{post.loadCount}</span>
        </div>
    )
}

async function getPostById(id) {
    const res = await fetch(`https://carmodels.onrender.com/model/${id}`)
    return res.json()
}

const postLoader = async ({ params }) => {
    const id = params.id;

    return defer({ post: await getPostById(id)})
}

export {FullPage, postLoader}
