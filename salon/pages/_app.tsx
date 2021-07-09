import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeToggler from '../components/ThemeToggler';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script src='https://code.iconify.design/1/1.0.6/iconify.min.js'></script>
      <NavBar />
      <ThemeToggler />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
