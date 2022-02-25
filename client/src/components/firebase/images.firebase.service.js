
import config from "./firebase";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";

const firebase = initializeApp(config);

const uploadImage = (fn,file,callback) => {
    let filename = `${Math.random()}.png`;
    if(fn)
    {
        filename = fn;
    }    
    var storage = getStorage(firebase);
    var storageRef = ref(storage, `${filename}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 | 0;
            callback({
                progress : progress,
                uploading : true,
                uploadError : false
            })
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            callback({
                progress : 0,
                uploading : false,
                uploadError : true
            })
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                callback({
                    progress : 100,
                    uploading : false,
                    uploadError : false,
                    imageURL : downloadURL
                })
            });
        }
    );
}

export {
    uploadImage
}