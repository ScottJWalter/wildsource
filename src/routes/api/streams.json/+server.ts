import { json } from '@sveltejs/kit';
import { streams } from '#lib/catalog.ts';

// The open catalog export. Static for now, so it can be prerendered.
export const prerender = true;

export function GET() {
	return json(streams);
}
