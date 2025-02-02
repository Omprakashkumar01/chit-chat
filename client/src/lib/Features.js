
const Fileformat = (url) => {
    const fileExt = url.split(".").pop();
    if(fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg"){
        return "video";
    }    
    if(fileExt === "mp3" || fileExt === "wav"){
        return "audio";
    }      
    if(fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg" || fileExt === "gif"){
        return "image";
    }  
    
}
const transformimage = (url="",width="100") => url;

export { Fileformat , transformimage };