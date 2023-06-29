import { Auction } from '@/app/_types/Auction';

const localAPI = 'https://demoreact.stream.bid/query2';
const remoteAPI = 'https://demo.stream.bid/query2';

export default async function getAllAuctions() {
	const res = await fetch(remoteAPI, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			Action: 'Req-AuctionsBasic',
			userTokenID: '',
		}),
		next: {
			revalidate: 60,
		},
	});

	if (!res.ok) {
		console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR');
		throw new Error('Failed to fetch data');
	}

	const data = await res.json();
	const auctions: Auction[] = data.auctions;

	// const res = await fetch('http://localhost:3000/api/auctions');

	// const auctions: Auction[] = await res.json();
	return auctions;
}
