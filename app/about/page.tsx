import styles from './page.module.scss';

export const metadata = {
	title: 'About timed auctions',
};

const AboutPage = () => {
	return (
		<div className={styles.homePage}>
			<h1>About Page</h1>
			<p>
				Cillum cupidatat fugiat ipsum elit. Fugiat aliquip non fugiat commodo
				anim voluptate occaecat proident Lorem occaecat adipisicing consequat
				excepteur. Ipsum culpa adipisicing veniam aute reprehenderit sunt in
				incididunt mollit. Nostrud ea irure laborum cupidatat tempor sunt
				exercitation quis pariatur sit reprehenderit sit irure est.
			</p>
		</div>
	);
};

export default AboutPage;
