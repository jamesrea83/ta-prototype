import { Suspense } from 'react';

import Auction from '@/components/Auction';

interface Params {
	params: {
		title: string;
	};
}

const AuctionPage = ({ params: { title } }: Params) => {
	return (
		<div>
			<h1>AuctionPage</h1>
			{/* <Suspense fallback={<>Loading Auction (Suspense)</>}> */}
			<Auction title={title} />
			{/* </Suspense> */}
		</div>
	);
};

export default AuctionPage;
