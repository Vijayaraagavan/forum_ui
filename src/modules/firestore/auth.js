import {auth} from './index'
import {signInWithEmailAndPassword} from 'firebase/auth'
const signInWithEmail = async (email, password) => {
    return new Promise(async (s, f) => {
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password)
            console.log(resp);
            s();
        } catch (error) {
            console.log(JSON.parse(JSON.stringify(error)))        
            if (error.code.includes('user-not')) {
                f('Invalid login')
            }
        }
    })
}

export {
    signInWithEmail
}