import { getPayload } from 'payload';
import { config } from 'payload-app';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.payload = await getPayload({ config });

	const response = await resolve(event);

	return response;
};
