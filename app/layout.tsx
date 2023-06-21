import './globals.scss';
import { Poppins } from 'next/font/google';

import styles from './layout.module.scss';
import Header from '@/app/components/Header';

const poppins = Poppins({
	weight: '500',
	subsets: ['latin'],
});

export const metadata = {
	title: 'TA Prototype',
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
