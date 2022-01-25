import React, { useRef, useEffect } from "react";
import Moment from "react-moment";

const Message = ({ msg, user1 }) => {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msg]);
    return (
        <div
            className={`message_wrapper ${msg.from === user1 ? "own" : ""} text-black`}
            ref={scrollRef}
        >
            <p className={`${msg.from === user1 ? "me" : "friend"} bg-slate-500`}>
                {msg.media ? <img src={user1.avatar} alt={msg.text} /> : null}
                {msg.text}
                <br />
                <small>
                    <Moment fromNow>{msg.createdAt.toDate()}</Moment>
                </small>
            </p>
        </div>
    );
};

export default Message;