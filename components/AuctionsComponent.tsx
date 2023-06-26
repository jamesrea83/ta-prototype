import { Auction } from '@/types';

const AuctionsComponent = ({ auctions }: { auctions: Auction[] }) => {
	return (
		<div>
			<h3>Auctions</h3>
			{auctions.map(auction => (
				<div key={auction.title}>{auction.title}</div>
			))}
		</div>
	);
};

export default AuctionsComponent;
