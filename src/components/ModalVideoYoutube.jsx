import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';
import { Image } from 'react-bootstrap';
import Img12 from '../assets/images/img12.jpg';

import 'react-modal-video/scss/modal-video.scss'

const VideoYoutube = () => {
 
    const [isOpen, setOpen] = useState(false)
 
    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="1ChW-1N5B9o" onClose={() => setOpen(false)} />
            <Image src={Img12} fluid onClick={()=> setOpen(true)}/>
        </React.Fragment>
    )
}
 
export default VideoYoutube;