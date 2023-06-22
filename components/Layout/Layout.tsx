import { FC, ReactElement } from 'react';

import styles from './Layout.module.scss';
import { Header } from '@/components/Header';

type LayoutProps = {
	children?: ReactElement;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.content}>{children}</div>
		</div>
	);
};
