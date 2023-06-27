import { Auction } from '@/app/_types/Auction';
import SSRAuctionsComponent from '@/app/(routes)/serverside/SSRAuctionsComponent';

import { store } from '@/store';
import { setIniitialAuctions } from '@/store/searchSlice';

export default async function ServerSidePage() {
	const req = await fetch('http://localhost:3000/api/auctions');
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
				At build time, the NextJS Node backend makes a normal POST request to
				the Streambid Scala backend for Req-AuctionsBasic
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
