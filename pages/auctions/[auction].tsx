import { GetStaticProps } from 'next';

const AuctionPage = ({ auction }: Props) => {
	return (
		<div>
			<h1>Auction Page</h1>
			<div>Title - {auction.title}</div>
		</div>
	);
};

export default AuctionPage;

export const getStaticProps: GetStaticProps = async context => {
	const auctionId = context?.params?.auction;
	const response = await fetch(
		'https://nextjs-course-5ca25-default-rtdb.europe-west1.firebasedatabase.app/auctions.json'
	);

	const auctions = await response.json();
	const transformed = transformData(auctions);
	const auction = transformed.find(item => item.id === auctionId);

	return {
		props: {
			auction,
		},
	};
};

export async function getStaticPaths() {
	const response = await fetch(
		'https://nextjs-course-5ca25-default-rtdb.europe-west1.firebasedatabase.app/auctions.json'
	);

	const auctions = await response.json();
	const transformed = transformData(auctions);

	const paths = transformed.map(auction => ({
		params: { auction: auction.id },
	}));

	return {
		paths,
		fallback: false,
	};
}

const transformData = (auctions: Auctions) => {
	const keys: string[] = Object.keys(auctions);
	return keys.map(auction => auctions[auction as keyof typeof auctions]);
};

interface Lot {
	lotNumber: number;
	title: string;
	value: number;
}

interface Auction {
	title: string;
	date: string;
	id: string;
	lots: Lot[];
}

interface Auctions {
	name: Auction;
}

interface Props {
	auction: Auction;
}
