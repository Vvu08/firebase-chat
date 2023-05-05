import { app } from './firebase'
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  Auth,
  GithubAuthProvider,
} from 'firebase/auth'

async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)

    const { user } = await signInWithPopup(auth, provider)

    return { uid: user.uid, displayName: user.displayName }
  } catch (error) {
    console.error(error)
    return null
  }
}

async function loginWithGithub() {
  try {
    const provider = new GithubAuthProvider()
    const auth = getAuth(app)

    const { user } = await signInWithPopup(auth, provider)

    return { uid: user.uid, displayName: user.displayName }
  } catch (error) {
    console.error(error)
    return null
  }
}

async function signOut(auth: Auth) {
  try {
    await auth.signOut()
  } catch (error) {
    console.error(error)
  }
}
export { loginWithGoogle, loginWithGithub, signOut }
