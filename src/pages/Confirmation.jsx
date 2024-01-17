import { useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'


function Confirmation() {


    useEffect(() => {
        const fetchLeads = async () => {
            const docRef = doc(db, "leads", "lead1")
            const docSnap = await getDoc(docRef)
            console.log(docSnap.data())
        }
      }, [])

    return (
        <div> Confirmation Page!</div>
    )
}
export default Confirmation