import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Simeus Technology !" />
        <p className="Helping customers diagnose technical issues over the phone and speaking with them about installing hardware or software on their computers">
      
        </Nobody does it like Technology>
      </main>

      <Footer />
    </div>
  )
}
