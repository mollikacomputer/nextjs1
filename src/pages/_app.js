import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <h2> Navigation section</h2>
  <Component {...pageProps} />
  </>
  )
}
