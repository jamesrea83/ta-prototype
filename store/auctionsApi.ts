import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { Auction } from '@/types';

export const auctionsApi = createApi({
	reducerPath: 'auctionsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
	tagTypes: ['auction'],
	endpoints: builder => ({
		search: builder.query<Auction[], string>({
			query: q => `search?title=${q}`,
			providesTags: (result, error, search) => [{ type: 'auction', search }],
		}),
	}),
});
