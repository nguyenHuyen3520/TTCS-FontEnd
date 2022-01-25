import { useEffect, useState } from "react";
import { upload, storage } from "../firebase/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
export default function Profile() {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

    function handleChange(e) {
        console.log(e.target.files[0])
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
            console.log(photo)
        }
    }

    function handleClick() {
        upload(photo, "test123", setLoading);
    }

    async function upload(file, name, setLoading) {
        const fileRef = ref(storage, name + '.png');

        setLoading(true);

        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        setLoading(false);
    }
    return (
        <div className="fields">
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
            <img src={photoURL} alt="Avatar" className="avatar" />
        </div>
    );
}