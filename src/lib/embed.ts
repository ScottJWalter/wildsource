import type { Stream } from './types';

/**
 * Turn a stream's public link into a URL that can go in an <iframe>.
 * YouTube refuses to be framed at /watch?v=..., so we rewrite it to /embed/<id>.
 * Returns null when the link isn't embeddable yet (for example a placeholder).
 */
export function embedUrl(stream: Stream): string | null {
	if (stream.source !== 'youtube') return null;

	let url: URL;
	try {
		url = new URL(stream.sourceUrl);
	} catch {
		return null;
	}

	const id = youtubeVideoId(url);
	if (!id || !/^[\w-]{11}$/.test(id)) return null;
	return `https://www.youtube.com/embed/${id}`;
}

/**
 * Pull the video ID out of the YouTube link shapes people share:
 *   https://youtu.be/<id>
 *   https://www.youtube.com/watch?v=<id>
 *   https://www.youtube.com/live/<id>   (the Share button on live streams)
 */
function youtubeVideoId(url: URL): string | null {
	if (url.hostname === 'youtu.be') return url.pathname.slice(1);

	const live = url.pathname.match(/^\/live\/([^/]+)/);
	if (live) return live[1];

	return url.searchParams.get('v');
}
