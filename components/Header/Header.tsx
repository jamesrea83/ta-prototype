import Link from 'next/link';

import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<Link className={styles.navItem} href="/">
					Home
				</Link>
				<Link className={styles.navItem} href="/auctions">
					Auctions
				</Link>
				<Link className={styles.navItem} href="/pureSSR">
					Server Side + Redux
				</Link>
				<Link className={styles.navItem} href="/reduxpage">
					Client Side + Redux
				</Link>
			</nav>
		</header>
	);
};

export default Header;
