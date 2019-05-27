import {openDB, deleteDB, wrap, unwrap} from 'idb';

export const api = {
	blog: {
		title: 'Blog',
		api: 'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&table=532894058'
	},
	talks: {
		title: 'Talks',
		api: 'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true'
	},
	code: {
		title: 'Code',
		api: 'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&table=83043280'
	}
};

export const pages = {
	privacy: 'Privacy',
	legal: 'Legal',
	app: 'App'
};

const store = 'store';

const dbPromise = openDB('nico.api', 1, {
	upgrade(db) {
		db.createObjectStore(store);
	}
});

export const idb = {
	async get(key) {
		return (await dbPromise).get(store, key);
	},
	async set(key, val) {
		return (await dbPromise).put(store, val, key);
	}
};