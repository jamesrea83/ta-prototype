import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.scss';
import styles from './layout.module.scss';
import Header from '@/components/Header';

const poppins = Poppins({
	weight: '500',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'App Router Prototype',
	description: 'Timed auction prototype',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				<main className={styles.main}>{children}</main>
			</body>
		</html>
	);
}
