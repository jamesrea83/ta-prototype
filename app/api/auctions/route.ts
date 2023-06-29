import { NextResponse } from 'next/server';

import { Auction } from '@/app/_types/Auction';

const localAPI = 'https://demoreact.stream.bid/query2';
const remoteAPI = 'https://demo.stream.bid/query2';

async function fetchAuctions() {
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

	const json = await res.json();

	return json.auctions;
}

export async function GET(req: Request) {
	console.log('GET Auctions');
	const { searchParams } = new URL(req.url);
	const title = searchParams.get('title');
	const auctionID = searchParams.get('auctionID');
	const auctions: Auction[] = await fetchAuctions();
	console.log('************', auctionID, title);
	if (title) {
		const searchedAuctions = auctions.filter(auction =>
			auction.title.toLowerCase().includes(title?.toLowerCase() ?? '')
		);

		return NextResponse.json(searchedAuctions);
	}

	if (auctionID) {
		const target = auctions.filter(auction => auction.auctionID === auctionID);
		return NextResponse.json(target);
	}

	return NextResponse.json(auctions);
}
