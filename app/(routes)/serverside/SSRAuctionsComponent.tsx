import Link from 'next/link';

import { store } from '@/store';
import { Auction } from '@/app/_types/Auction';

const SSRAuctionsComponent = () => {
	const auctions: Auction[] = store.getState().search.initialAuctions;

	return (
		<div className="green">
			<h3>Auctions - from demo.stream.bid</h3>
			<ul>
				{auctions?.map(auction => (
					<li key={auction.auctionID}>
						<Link href={`/serverside/${auction.auctionID}`}>
							{auction.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SSRAuctionsComponent;
