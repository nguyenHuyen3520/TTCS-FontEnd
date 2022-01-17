import { useEffect, useState } from "react";
import { upload } from "../firebase/firebase";

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
        upload(photo, "test", setLoading);
    }


    return (
        <div className="fields">
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
            <img src={photoURL} alt="Avatar" className="avatar" />
        </div>
    );
}