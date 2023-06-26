'use client';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div>
			<h1>{error.toString()}</h1>
			<h2>Something went wrong!</h2>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
}
