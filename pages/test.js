import Image from 'next/image'

function Test(props) {
  console.log(props);
  const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

  return(
    <div>
    <p>{props.test}</p>
      {YourComponent()}
    </div>
  )
}

/*export async function getStaticProps() {
  return {
    props: {test: "test"}
  }
}*/

export async function getServerSideProps(context) {
const parsed_context = context.query;
 return {
    props: {
      test: "test",
      // props for your component
    }
  }
}

export default Test;
