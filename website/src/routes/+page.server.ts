import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { payload } }) => {
	const media = await payload.find({
		collection: 'media'
	});
	return {
		media
	};
};
