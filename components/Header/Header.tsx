import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => (
	<header className={styles.header}>
		<nav className={styles.nav}>
			<Link className={styles.navItem} href="/">
				Home
			</Link>
			<Link href="/auctions">Auctions</Link>
		</nav>
	</header>
);

export { Header };
