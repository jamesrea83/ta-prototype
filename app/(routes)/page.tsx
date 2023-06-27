import { NextPage } from 'next';
import Link from 'next/link';

import styles from './page.module.scss';

const HomePage: NextPage = () => {
	return (
		<div className={styles.homePage}>
			<h1>Timed Auctions Prototype</h1>
			<ul>
				<li>
					<Link href="/serverside">Server Side + Redux</Link>
				</li>
				<li>
					<Link href="/clientside">Client Side + Redux</Link>
				</li>
			</ul>
			<p>Areas bordered in green are Server Side Rendered.</p>
			<p>Areas bordered in red are Client Side Rendered</p>
		</div>
	);
};

export default HomePage;
