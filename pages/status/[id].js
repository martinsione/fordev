import Post from "components/Post"
import { firestore } from "firebase/admin"
import { useRouter } from "next/router"
import Head from "next/head"

export default function IndividualPost(props) {
  const router = useRouter()

  if (router.isFallback) return <h1>Cargando...</h1>

  return (
    <>
      <Head>
        <title>Status - Fordev</title>
      </Head>
      <Post {...props} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "84RcCkZx4NKRpMRxWn0Z" } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const { id } = params

  return firestore
    .collection("posts")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      }
      return { props }
    })
    .catch(() => {
      return { props: {} }
    })
}
