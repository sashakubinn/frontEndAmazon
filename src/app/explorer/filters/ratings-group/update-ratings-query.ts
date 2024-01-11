export function updateRatingsQuery(currentRatings: string, newRating: string) {
	const ratingsArray = currentRatings ? String(currentRatings).split('|') : []
	const ratingsIndex = ratingsArray.indexOf(newRating)

	if (ratingsIndex === -1) {
		ratingsArray.push(newRating)
	} else {
		ratingsArray.splice(ratingsIndex, 1)
	}
	return ratingsArray.join('|')
}
