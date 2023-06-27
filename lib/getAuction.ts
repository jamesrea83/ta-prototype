import { Auction } from '@/app/_types/Auction';

const localAPI = 'https://demoreact.stream.bid/query2';
const remoteAPI = 'https://demo.stream.bid/query2';

export default async function getAuction(auctionID: string) {
	const res = await fetch(remoteAPI, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			Action: 'Req-AuctionsBasic',
			userTokenID: '',
		}),
		cache: 'no-cache',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const json = await res.json();
	const auctions: Auction[] = json.auctions;
	const auction = auctions.find(auction => auction.auctionID === auctionID);

	return auction;
}
