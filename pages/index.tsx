import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
	return (
		<div>
			<h1>Timed Auctions Prototype</h1>
			<ul>
				<li>
					<Link href="/auctions">Auctions Page</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
