import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function PostLink(props) {
  return (
    <li>
      <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}
function HomeLink(props) {
  return (
    <li>
      <Link as={`${props.id}`} href={`${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default function Index() {
  return (
    <Layout>
      <h1>Digital art</h1>
      <h2>The data of Renaissance Art</h2>
      
      <ul>
        <HomeLink id="http://digitalartdata.com" title="Monna Lisa" />
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}
