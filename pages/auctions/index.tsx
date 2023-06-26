import Head from 'next/head';
import Link from 'next/link';

import styles from './auctions.module.scss';

interface Lot {
	lotNumber: number;
	title: string;
	value: number;
}

interface Auction {
	title: string;
	date: string;
	id: string;
	lots: Lot[];
}

interface Auctions {
	name: Auction;
}

interface Props {
	auctions: Auction[];
}

const transformData = (auctions: Auctions) => {
	const keys: string[] = Object.keys(auctions);
	return keys.map(auction => auctions[auction as keyof typeof auctions]);
};

export const getServerSideProps = async () => {
	const response = await fetch(
		'https://nextjs-course-5ca25-default-rtdb.europe-west1.firebasedatabase.app/auctions.json'
	);

	const auctions = await response.json();
	const transformed = transformData(auctions);

	return { props: { auctions: transformed } };
};

const AuctionsPage = ({ auctions }: Props) => {
	if (!auctions?.length) return <div>LOADING</div>;
	console.log(auctions);
	return (
		<div>
			<Head>
				<title>Time Auctions List</title>
			</Head>
			<h1>Auctions Page</h1>
			<div className={styles.listWrapper}>
				{auctions?.map(auction => {
					const { title, id } = auction;
					return (
						<Link
							className={styles.listItem}
							href={`/auctions/${id}`}
							key={title}
						>
							{title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default AuctionsPage;
