import react, { useEffect } from 'react'
import MainScreen from '../MainScreen/MainScreen.component'
import { firepadRef, database, userName, getMeet } from "../../firebase/firebase";
import { ref, onChildChanged, onChildAdded, child, push, onValue, onDisconnect } from "firebase/database";
import {
  setMainStream,
  addParticipant,
  setUser,
  removeParticipant,
  updateParticipant,
} from "../../store/actioncreator";
import { connect } from "react-redux";

function Meet(props) {
  const connectedRef = ref(database, ".info/connected");
  const participantRef = child(firepadRef, "participants");
  const getUserStream = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    return localStream;
  };
  useEffect(() => {
    getMeet();
  }, [])
  useEffect(() => {
    const getStream = async () => {
      const stream = await getUserStream();
      stream.getVideoTracks()[0].enabled = false;
      props.setMainStream(stream);
      onValue(connectedRef, (snap) => {
        if (snap.val()) {
          const defaultPreference = {
            audio: true,
            video: false,
            screen: false,
          };
          const userStatusRef = push(participantRef, {
            userName,
            preferences: defaultPreference,
          });
          props.setUser({
            [userStatusRef.key]: { name: userName, ...defaultPreference },
          });
          onDisconnect(userStatusRef).remove();
        }
      });
    }
    getStream();
  }, [connectedRef]);

  const isUserSet = !!props.user;
  const isStreamSet = !!props.stream;

  useEffect(() => {
    if (isStreamSet && isUserSet) {
      onChildAdded(participantRef, (snap) => {
        const preferenceUpdateEvent = child(child(participantRef, snap.key), "preferences");
        onChildChanged(preferenceUpdateEvent, (preferenceSnap) => {
          props.updateParticipant({
            [snap.key]: {
              [preferenceSnap.key]: preferenceSnap.val(),
            },
          });
        });
        const { userName: name, preferences = {} } = snap.val();
        props.addParticipant({
          [snap.key]: {
            name,
            ...preferences,
          },
        });
      });
      onValue(participantRef, (snap) => {
        props.removeParticipant(snap.key);
      });
    }
  }, [isStreamSet, isUserSet]);

  return (
    <div >
      <MainScreen />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stream: state.mainStream,
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMainStream: (stream) => dispatch(setMainStream(stream)),
    addParticipant: (user) => dispatch(addParticipant(user)),
    setUser: (user) => dispatch(setUser(user)),
    removeParticipant: (userId) => dispatch(removeParticipant(userId)),
    updateParticipant: (user) => dispatch(updateParticipant(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meet);

