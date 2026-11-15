import { error } from '@sveltejs/kit';
import { getHost, getStream, streams } from '#lib/catalog.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const stream = getStream(params.id);
	if (!stream) error(404, 'Stream not found');

	const more = streams
		.filter((s) => s.id !== stream.id && s.live)
		.toSorted((a, b) => Number(b.habitat === stream.habitat) - Number(a.habitat === stream.habitat))
		.slice(0, 3);

	return { stream, host: getHost(stream.hostId), more };
};
