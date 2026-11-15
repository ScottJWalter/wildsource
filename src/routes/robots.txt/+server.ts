import { SITE_URL } from '#lib/config.ts';

export const prerender = true;

export function GET() {
	return new Response(`User-agent: *\nDisallow:\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, {
		headers: { 'Content-Type': 'text/plain' }
	});
}
