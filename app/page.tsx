import { NextPage } from 'next';
import Link from 'next/link';

import styles from './page.module.scss';

const HomePage: NextPage = () => {
	return (
		<div className={styles.homePage}>
			<h1>Timed Auctions Prototype</h1>
			<ul>
				<li>
					<Link href="/">Home Page</Link>
				</li>
				<li>
					<Link href="/about">About Page</Link>
				</li>
				<li>
					<Link href="/about/team">Team Page</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
