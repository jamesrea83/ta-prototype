import { NextResponse } from 'next/server';

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

export async function GET(req: Request) {
	console.log('GET');
	const { searchParams } = new URL(req.url);
	const title = searchParams.get('title');
	console.log(title);
	const auctions: Auction[] = await fetchAuctions();
	const searchedAuctions = auctions.filter(auction =>
		auction.title.toLowerCase().includes(title?.toLowerCase() ?? '')
	);

	return NextResponse.json(searchedAuctions);
}
