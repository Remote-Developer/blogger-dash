import type { AppProps } from 'next/app';
import "../pages/styles/home.dash.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}