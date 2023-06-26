import { NextPage } from 'next';
import Link from 'next/link';

import styles from './page.module.scss';

const HomePage: NextPage = () => {
	return (
		<div className={styles.homePage}>
			<h1>Timed Auctions Prototype</h1>
			<ul>
				<li>
					<Link href="/auctions">Timed Auctions</Link>
				</li>
				<li>
					<Link href="/pureSSR">Server Side + Redux</Link>
				</li>
				<li>
					<Link href="/reduxpage">Client Side + Redux</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
