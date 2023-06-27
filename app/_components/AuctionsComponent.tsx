import { Auction } from '@/app/_types/Auction';

const AuctionsComponent = ({ auctions }: { auctions: Auction[] }) => {
	return (
		<div>
			<h3>Auctions - from demo.stream.bid</h3>
			{auctions.map(auction => (
				<div key={auction.title}>{auction.title}</div>
			))}
		</div>
	);
};

export default AuctionsComponent;
