import {openDB, deleteDB, wrap, unwrap} from 'idb';

export const sources = {
	blog: {
		title: 'Blog',
		api: 'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&table=532894058&reverse=true'
	},
	talks: {
		title: 'Talks',
		api: 'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&reverse=true'
	},
	code: {
		title: 'Code',
		api: 'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&table=83043280&reverse=true'
	},
	pages: {
		api: 'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&col=true&table=1931568447&filter-col=content|md2html',
		pages: {
			privacy: 'Privacy',
			legal: 'Legal',
			app: 'This Project is Open Source'
		}
	}
};

const idbStore = 'store';

const idbPromise = openDB('nico.api', 1, {
	upgrade(db) {
		db.createObjectStore(idbStore);
	}
});

const idb = {
	async get(key) {
		return (await idbPromise).get(idbStore, key);
	},
	async set(key, val) {
		return (await idbPromise).put(idbStore, val, key);
	}
};

export const fetchApi = function (key, setResponse) {
	if (typeof sources[key] === 'undefined') {
		setResponse(false);
		return;
	}
	if (typeof sources[key].api === 'undefined') {
		setResponse(false);
		return;
	}

	idb.get(key).then(resp => {
		if (resp) {
			setResponse(resp);
		} else {
			document.body.classList.add('loading--api');
		}
	});

	fetch(sources[key].api)
		.then(result => {
			return result.json();
		})
		.then(entries => {
			document.body.classList.remove('loading--api');
			idb.set(key, entries);
			setResponse(entries);
		});
};
