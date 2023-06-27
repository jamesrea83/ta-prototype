import Link from 'next/link';

import { Auction } from '@/app/_types/Auction';

const AuctionsComponent = ({ auctions }: { auctions: Auction[] }) => {
	return (
		<div>
			<h3>Auctions - from demo.stream.bid</h3>
			<ul>
				{auctions?.map(auction => (
					<li key={auction.auctionID}>
						<Link href={`/clientside/${auction.auctionID}`}>
							{auction.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AuctionsComponent;
