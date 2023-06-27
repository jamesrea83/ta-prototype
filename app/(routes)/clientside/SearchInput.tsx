'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { RootState, AppDispatch } from '@/store';
import { setSearch } from '@/store/searchSlice';
import { auctionsApi } from '@/store/auctionsApi';
import { Auction } from '@/app/_types/Auction';
import AuctionsComponent from '@/app/(routes)/clientside/AuctionsComponent';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
	// const dispatch = useAppDispatch();
	// const search = useAppSelector(state => state.search.search);
	// const initialAuctions = useAppSelector(state => state.search.initialAuctions);
	// const data = useAppSelector(
	// 	state => state.auctionsApi.queries[`search("${search}")`]?.data as Auction[]
	// );

	// useEffect(() => {
	// 	dispatch(auctionsApi.endpoints.search.initiate(search));
	// }, [dispatch, search]);

	const initialAuctions = useAppSelector(state => state.search.initialAuctions);
	const [auctions, setAuctions] = useState(initialAuctions || []);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const searchedAuctions = initialAuctions.filter(auction =>
			auction.title.toLowerCase().includes(search?.toLowerCase() ?? '')
		);
		console.log('SETTING AUCTIONS');
		setAuctions(searchedAuctions || []);
	}, [search, initialAuctions]);

	return (
		<div className="red">
			<p>Search by auction title</p>
			<input
				type="text"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<div>{search}</div>
			<AuctionsComponent
				auctions={search.length ? auctions ?? [] : initialAuctions}
			/>
		</div>
	);
};

export default SearchInput;
