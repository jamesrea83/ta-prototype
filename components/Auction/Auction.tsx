import styles from './Auction.module.scss';

interface Auction {
	title: string;
	date: string;
	auctionID: string;
}

const localAPI = 'https://demoreact.stream.bid/query2';

async function fetchAuctions() {
	await new Promise(resolve => setTimeout(resolve, 2000));

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

const Auction = async ({ title }: { title: string }) => {
	const auctions: Auction[] = await fetchAuctions();
	// console.log(title);
	// console.log(auctions);
	const auction = auctions.find(auction => auction.title === title);
	return (
		<>
			<h2>Auction Component</h2>

			<div>Title: {auction?.title}</div>
			<div>ID: {auction?.auctionID}</div>
		</>
	);
};

export default Auction;
