'use client';
import { useRef } from 'react';

import { store } from '@/store';
import { setIniitialAuctions } from '@/store/searchSlice';
import { Auction } from '@/types';

function Preloader({ auctions }: { auctions: Auction[] }) {
	const loaded = useRef(false);

	if (!loaded.current) {
		loaded.current = true;
		store.dispatch(setIniitialAuctions(auctions));
	}
	return null;
}

export default Preloader;
