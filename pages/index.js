import Head from 'next/head'
import Layout from '@components/Layout'
import Image from 'next/image'

export default function Home({}) {
  return (
    <>
      <Head title="page title" description="page description" />
      <Layout>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, ratione
          explicabo deleniti, quod at voluptas quaerat ullam quibusdam vitae, deserunt
          distinctio est neque. Mollitia eveniet at magni velit, quos earum.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '8px',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1637078767795-c1f63fcb4b3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
            alt=""
            width={640}
            height={300}
          />
          <Image
            src="https://images.unsplash.com/photo-1640108899708-7a1d204af10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
            width={640}
            height={300}
            className="santa"
          />
        </div>
        <p style={{ background: 'grey' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat omnis
          soluta similique quia quasi adipisci rem maiores pariatur et dolore molestiae
          quos. Mollitia impedit consequuntur ea? Voluptatem, placeat odit.
        </p>
        <ul>
          <li>blah balh as; asdf </li>
          <li>blah balh as; asdf </li>
          <li>blah balh as; asdf </li>
          <li>blah balh as; asdf </li>
        </ul>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore optio hic
          nobis non exercitationem animi et voluptatum neque suscipit. Explicabo illum in
          ad consectetur, dicta et quo possimus rerum molestias?
        </p>
      </Layout>
    </>
  )
}
