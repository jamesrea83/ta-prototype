import Link from 'next/link';

import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/about/team">Team</Link>
				<Link href="/code/repos">Code</Link>
			</nav>
		</header>
	);
};

export default Header;
