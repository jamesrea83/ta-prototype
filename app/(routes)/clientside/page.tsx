import getAllAuctions from '@/lib/getAllAuctions';
import Providers from '@/app/_components/Provider';
import Preloader from '@/app/_components/Preloader';
import { Auction } from '@/app/_types/Auction';
import SearchInput from '@/app/(routes)/clientside/SearchInput';

export default async function ClientSidePage() {
	const auctions: Auction[] = await getAllAuctions();

	return (
		<div className="green">
			<Preloader auctions={auctions} />
			<h1>Client Side Auctions List</h1>
			<p>
				The area bordered in green is Server Side Rendered. The area bordered in
				red is Client Side Rendered
			</p>
			<Providers>
				<SearchInput />
			</Providers>
			<p>
				The area bordered in red is marked as{' '}
				<code>&quot;use client&quot;;</code>
			</p>
			<p>
				This is treated as a traditional React component, with internal state &
				lifecycle methods.
			</p>
			<p>
				The initial data is fetched in the same way as the Server Side Redux
				example, but on loading in the browser the data is passed to a
				traditional client side redux store.
			</p>
		</div>
	);
}
