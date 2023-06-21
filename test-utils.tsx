import { ReactElement } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';

import { rootReducer, RootState } from '@/store';

interface Props {
	children: ReactElement;
}

type Options = { preloadedState?: RootState } & RenderOptions;

const customRender = (
	ui: ReactElement,
	{ preloadedState, ...options }: Options = {}
) => {
	const store = configureStore({ reducer: rootReducer, preloadedState });

	const Wrapper = ({ children }: Props) => (
		<Provider store={store}>{children}</Provider>
	);
	return render(ui, { wrapper: Wrapper, ...options });
};

const pageRender = (
	ui: ReactElement,
	{ preloadedState, ...options }: Options = {}
) => {
	const store = configureStore({ reducer: rootReducer, preloadedState });

	const Wrapper = ({ children }: Props) => (
		<Provider store={store}>{children}</Provider>
	);
	return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render, pageRender };
