import React from 'react'
import { transformimage } from '../../lib/Features';
import {FileOpen} from '@mui/icons-material';
const RenderAttachments = (url,file) => {
    switch (file)  {
        case "video":
            return <video src={url} preload='none' controls width="250" height="250" />;
            
        case "audio":
            return <audio src={url} preload='none' controls />;
        
        case "image":
            return (<img src={transformimage(url,200)} 
            alt="attachment" 
            width={"200px"} 
            height={"150px"}
            style={{ objectFit: "contain" }} />);
            
        default:
            return <FileOpen />;
    }
  
};

export default RenderAttachments;