import { Auction } from '@/app/_types/Auction';
import getAllAuctions from '@/lib/getAllAuctions';
import getAuction from '@/lib/getAuction';

interface Props {
	params: {
		auctionID: string;
	};
}

export async function generateStaticParams() {
	const auctions: Auction[] = await getAllAuctions();

	return auctions.map(auction => ({
		auctionID: auction.auctionID,
	}));
}

export default async function AuctionPage({ params: { auctionID } }: Props) {
	const decodedID = decodeURIComponent(auctionID);
	const target = await getAuction(decodedID);

	return (
		<div className="green">
			<h1>Auction Page</h1>
			<h2>Auction Title - {target?.title}</h2>
			<h2>Auction ID - {decodedID}</h2>
		</div>
	);
}
