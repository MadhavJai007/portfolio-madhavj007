import '../styles/custom.global.scss'
import { SSRProvider } from 'react-bootstrap'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}
