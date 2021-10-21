import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../sections/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<link
				href='https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css'
				rel='stylesheet'
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
export default MyApp;
