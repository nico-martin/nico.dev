import { openDB, deleteDB, wrap, unwrap } from 'idb';

export const sources = {
  blog: {
    title: 'Blog',
    api:
      'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&table=532894058&reverse=true',
  },
  talks: {
    title: 'Talks',
    api:
      'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&reverse=true',
  },
  code: {
    title: 'Code',
    api:
      'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&table=83043280&reverse=true',
  },
  pages: {
    api:
      'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&col=true&table=1931568447&filter-col=content|md2html',
    pages: {
      privacy: 'Privacy',
      legal: 'Legal',
      app: 'This Project is Open Source',
    },
  },
};

const idbStore = 'store';

const idbPromise = openDB('nicoApi', 1, {
  upgrade(db) {
    db.createObjectStore(idbStore);
  },
});

const idb = {
  async get(key) {
    return (await idbPromise).get(idbStore, key);
  },
  async set(key, val) {
    return (await idbPromise).put(idbStore, val, key);
  },
};

export const fetchApi = function(key, setResponse) {
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
    }
  });

  fetch(sources[key].api)
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log(key, 'before', data);
      const entries = data.map(dataSingular =>
        formatResponse(key, dataSingular)
      );
      console.log(key, 'after', entries);
      //idb.set(key, entries);
      setResponse(entries);
    });
};

const formatResponse = (key, data) => {
  let entry = {};
  switch (key) {
    case 'blog':
      entry = {
        supTitle: formatDate(data.date) + ' on ' + data.publisher,
        title: data.title,
        content: data.abstract,
        links: [[data.link, 'weiterlesen']],
      };
      break;
    case 'talks':
      entry = {
        supTitle: formatDate(data.date),
        title: data.venue,
        content: data.title,
        links: [],
      };
      if (data.slides !== '') {
        entry.links.push([data.slides, 'Slides']);
      }
      if (data.video !== '') {
        entry.links.push([data.video, 'Video']);
      }
      break;
    case 'code':
      entry = {
        title: data.title,
        subTitle: data.title,
        content: data.description,
        links: [[data.link, data.publisher]],
      };
      if (data.demo !== '') {
        entry.links.push([data.demo, 'Demo']);
      }
      break;
    default:
      entry = {};
  }

  return {
    ...{
      supTitle: false,
      title: false,
      subTitle: false,
      content: false,
      links: [],
    },
    ...entry,
  };
};

const formatDate = date => {
  const parts = date.split('-');
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
};
