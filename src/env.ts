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
	}
});
