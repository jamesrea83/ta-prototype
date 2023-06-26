import styles from './page.module.scss';

export const metadata = {
	title: 'Repos',
};

async function fetchAuctions() {
	await new Promise(resolve => setTimeout(resolve, 2000));
	return fetch(
		'https://nextjs-course-5ca25-default-rtdb.europe-west1.firebasedatabase.app/auctions.json'
	)
		.then(response => {
			const data = response.json();
			return data;
		})
		.then(data => {
			return transformData(data);
		})
		.catch(error => {
			console.log(error);
			return [];
		});
}

interface Lot {
	lotNumber: number;
	title: string;
	value: number;
}

interface Auction {
	title: string;
	date: string;
	lots: Lot[];
}

interface Auctions {
	name: Auction;
}

const transformData = (auctions: Auctions) => {
	const keys: string[] = Object.keys(auctions);
	return keys.map(auction => auctions[auction as keyof typeof auctions]);
};

const CodePage = async () => {
	const auctions: Auction[] = await fetchAuctions();
	return (
		<div className={styles.homePage}>
			<h1>Code Page</h1>
			<div>{auctions.map(auction => auction.title)}</div>
		</div>
	);
};

export default CodePage;
