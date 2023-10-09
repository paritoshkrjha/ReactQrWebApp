import { ref, set, push } from 'firebase/database'
import { database, store } from '../firebase'
import axios from 'axios'
import { doc, getDoc } from 'firebase/firestore'

export function pushNotification({ token, payload }) {
  return axios.post('https://qr-fcm.onrender.com/send-notification', {
    token,
    payload: { title: payload.radioOptions, body: payload.desc },
  })
}

export async function sendMessage(payload, userId) {
  
  let id = payload.key
  const dbRef = ref(database, `messages/${userId}`)

  const pushDbRef = push(dbRef)

  try {
    console.log(payload)
    await set(pushDbRef, payload)
    const docRef = doc(store, 'users', userId)
    const docSnap = await getDoc(docRef)
    const userData = docSnap.data()
    const token = userData.fcmToken
    await pushNotification({ payload, token })
  } catch (e) {
    throw new Error(e)
  }
}
