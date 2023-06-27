import { store } from '@/store';

import { Auction } from '@/app/_types/Auction';

const SSRAuctionsComponent = () => {
	const auctions: Auction[] = store.getState().search.initialAuctions;

	return (
		<div>
			<h3>Auctions - from demo.stream.bid</h3>
			{auctions.map(auction => (
				<div key={auction.title}>{auction.title}</div>
			))}
		</div>
	);
};

export default SSRAuctionsComponent;
