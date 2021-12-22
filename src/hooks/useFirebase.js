import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useEffect } from 'react';
import firebaseInit from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import useStore from './useStore';

firebaseInit();
const useFirebase = () => {
  const { setDbUser, setLogged } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true);
        setDbUser(user);
      } else {
        setLogged(false);
        setDbUser({});
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emailPasswordSignUp = (email, password, displayName, photoURL) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            setLogged(true);
            setDbUser(userCredential.user);
            navigate('/');
          })
          .catch((error) => {});
      })
      .catch((error) => {
        setLogged(false);
        setDbUser({ err: error.message });
      });
  };
  const emailPasswordLogin = (email, password, location) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLogged(true);
        setDbUser(userCredential.user);
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        setLogged(false);
        setDbUser({ err: error.message });
        alert(error.message);
      });
  };

  const googleClient = (location) => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setLogged(true);
        setDbUser(result.user);
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        setLogged(false);
        setDbUser({ err: error.message });
      });
  };

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLogged(false);
        setDbUser({});
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return {
    googleClient,
    emailPasswordSignUp,
    emailPasswordLogin,
    logOut,
  };
};

export default useFirebase;
