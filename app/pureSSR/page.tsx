import { Auction } from '@/types';
import SSRAuctionsComponent from '@/components/SSRAuctionsComponent';

import { store } from '@/store';
import { setIniitialAuctions } from '@/store/searchSlice';

export default async function ReduxPage() {
	const req = await fetch('http://localhost:3000/api/search');
	const auctions: Auction[] = await req.json();

	store.dispatch(setIniitialAuctions(auctions));

	return (
		<div>
			<h1>Server Side Auctions List</h1>
			<SSRAuctionsComponent />
			<p>
				The above list of auctions is a React Server Component. It cannot use
				internal state or lifecycle methods. It is rendered on the server, and
				the client receives the plain HTML
			</p>
			<p>
				When a client requests this page, the NextJS Node backend makes a normal
				POST request to the Streambid Scala backend for Req-AuctionsBasic
			</p>
			<p>
				Once received, this data can be passed directly into the component for
				rendering or passed to a server-side Redux store for more complex data
				usage.
			</p>
			<p>Here, the component is receiving the data from the Redux store.</p>
		</div>
	);
}
