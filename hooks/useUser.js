import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/client"

export const USER_STATE = {
  LOADING: undefined,
  NOT_LOGGED: null,
}

export default function useUser() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  return user
}
