import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';
import { Image } from 'react-bootstrap';
import Img12 from '../assets/images/img12.jpg';

import 'react-modal-video/scss/modal-video.scss'

const VideoVimeo = () => {
 
    const [isOpen, setOpen] = useState(false)
 
    return (
        <React.Fragment>
            <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="512340285" onClose={() => setOpen(false)} />
            <Image src={Img12} fluid onClick={()=> setOpen(true)}/>
        </React.Fragment>
    )
}
 
export default VideoVimeo;