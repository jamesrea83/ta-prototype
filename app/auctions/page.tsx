import Link from 'next/link';

import styles from './auctions.module.scss';

interface Auction {
	title: string;
	date: string;
	auctionID: string;
}

const localAPI = 'https://demoreact.stream.bid/query2';

async function fetchAuctions() {
	// await new Promise(resolve => setTimeout(resolve, 2000));

	const res = await fetch(localAPI, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			Action: 'Req-AuctionsBasic',
			userTokenID: '',
		}),
		next: {
			revalidate: 10,
		},
	});

	const json = await res.json();

	return json.auctions;
}

export const metadata = {
	title: 'Timed Auctions List',
};

const AuctionsPage = async () => {
	const auctions: Auction[] = await fetchAuctions();
	return (
		<div>
			<h1>Auctions Page</h1>
			<div className={styles.listWrapper}>
				{auctions?.map(auction => {
					const { title } = auction;
					return (
						<Link
							className={styles.listItem}
							href={`/auctions/${title}`}
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
