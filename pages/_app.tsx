import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import './globals.scss';
import { store } from '@/store';
import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
