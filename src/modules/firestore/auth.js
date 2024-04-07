import { useNavigate } from 'react-router-dom';
import {auth} from './index'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    TwitterAuthProvider,
    signOut
  } from 'firebase/auth';
const provider = new GoogleAuthProvider()


  const signInWithEmail = async (email, password) => {
    return new Promise(async (s, f) => {
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password)
            // console.log(resp);
            s();
        } catch (error) {
            console.log(JSON.parse(JSON.stringify(error)))        
            if (error.code.includes('user-not')) {
                f('Invalid login')
            }
        }
    })
}

const signUpWithEmail = async (email, password) => {
    return new Promise(async (s, f) => {
        try {
            const resp = await createUserWithEmailAndPassword(auth, email, password)
            // console.log(resp);
            s(resp.user);
        } catch (error) {
            console.log(JSON.parse(JSON.stringify(error)))        
            if (error.code.includes('uth/email-already-in-use')) {
                f('Email already registered')
            }
            f('Unknown error');
        }
    })
}
const logout = () => {
    signOut(auth);
}

const signInWithProvider = (id, cb, errorCb) => {
    const provider = getProvider(id)
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result)
        // const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        save();
        // console.log('google user', user)
        cb(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        // The AuthCredential type that was used.
        errorCb()
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log('google error', error)
        // ...
      })
  }
  
  const getProvider = (id) => {
    if (id.includes('google')) {
      return new GoogleAuthProvider()
    } else if (id.includes('facebook')) {
      return new FacebookAuthProvider()
    } else if (id.includes('twitter')) {
      return new TwitterAuthProvider()
    }
    return new GoogleAuthProvider()
  }
  
  const authorized = () => {
    return new Promise((s, f) => {
      auth.onAuthStateChanged((user) => {
        // console.log('aft', user)
        if (user != null) {
          s(user)
        } else {
          f('failure');
        }
      })
    })
  }
  
  const save = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
  }

export {
    signInWithEmail,
    signUpWithEmail,
    logout,
    signInWithProvider,
    authorized,
    save
}