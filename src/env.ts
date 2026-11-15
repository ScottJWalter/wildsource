import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_REPO_URL: {
		public: true,
		static: true,
		schema: (value) => value || 'https://github.com/ScottJWalter/wildsource'
	},
	PUBLIC_SITE_URL: {
		public: true,
		static: true,
		schema: (value) => value || 'https://wildsource.jnagra.com'
	},
	PUBLIC_VERCEL_ANALYTICS: {
		public: true,
		static: true,
		schema: (value) => {
			if (value === undefined || value === '' || value === 'false') return false;
			if (value === 'true') return true;
			throw new Error('PUBLIC_VERCEL_ANALYTICS must be true or false');
		}
	}
});
