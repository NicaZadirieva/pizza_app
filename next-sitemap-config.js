// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://pizzaexpress.com',
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	changefreq: 'daily',
	priority: 0.7,
	sitemapSize: 5000,
	exclude: [
		'/admin/*',
		'/api/*',
		'/private/*'
	],
	transform: async (config, path) => {
		// Custom priority for different page types
		let priority = config.priority;
		let changefreq = config.changefreq;

		if (path === '/') {
			priority = 1.0;
			changefreq = 'daily';
		} else if (path.includes('/pizza/')) {
			priority = 0.9;
			changefreq = 'weekly';
		} else if (path.includes('/menu')) {
			priority = 0.8;
			changefreq = 'weekly';
		} else if (path.includes('/location/')) {
			priority = 0.7;
			changefreq = 'monthly';
		}

		return {
			loc: path,
			changefreq,
			priority,
			lastmod: new Date().toISOString()
		};
	},
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/admin', '/api', '/private']
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				crawlDelay: 1
			}
		],
		additionalSitemaps: [
			'https://pizzaexpress.com/locations-sitemap.xml'
		]
	}
};