import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="grid h-screen grid-rows-[auto_1fr]  bg-skin-fill text-white">
            <Header />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
