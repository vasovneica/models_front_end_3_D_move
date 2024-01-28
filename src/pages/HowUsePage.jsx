import { LittleImage } from '../components/LittleImage';
import texture from '../img/new_new_color.png';
import { IoDownloadSharp } from 'react-icons/io5';


export const HowUsePage = () => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = texture;
        link.download = "texture.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        <div className='how-use-page'>
            <h3>Instruction</h3>
            <p>all models contain separation by materials</p>
            <p>0-the color of the window frames, bottom, etc</p>
            <p>1 - the main color of the body</p>
            <p>2 - window material</p>
            <p>3 - the material of the front lights</p>
            <p>4 - taillight material</p>
            <p>Below, you can upload the origin texture with which all models were created</p>

            <div>
                <div className='textere-wrap'>
                    <LittleImage imageUrl={texture}/>
                </div>

                <div>
                    <h4>texture</h4>
                    <button className='button' onClick={handleDownload} >
                        <IoDownloadSharp />  Download
                    </button>
                </div>
                
            </div>
            </div>
        </>)
};