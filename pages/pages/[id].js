function Post(props) {
  return (
    <div>
      {props.id && <p>{props.id}</p>}
    </div>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: "a" } },
    { params: { id: "b" } }
  ]

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  return { props: {id: params.id} }
}

export default Post;
