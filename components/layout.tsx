import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


export const siteTitle = 'Pokemon Profile'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Basic profile info about pokemon"
        />
    
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            
            <h1 className={utilStyles.heading2Xl}>Pokedex</h1>
          </>
        ) : (
          <>
            
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}></a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}