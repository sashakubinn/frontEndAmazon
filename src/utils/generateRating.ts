export function generateRating() {
	const rating = Math.floor(Math.random() * 5) + 1
	return { rating }
}
