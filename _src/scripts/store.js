import idb from './storeDB';
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
      'https://api.nico.dev/2PACX-1vSNjZItcRIaqBeN8xIBQNjphBUqgBEOo149_bUjFMLOGsByT0LXqaBF3C-zN44ThrDeEdB5Q_bJsW5B/?row=true&col=false&table=1931568447&filter-col=content|md2html',
    pages: {
      privacy: 'Privacy',
      legal: 'Legal',
      uses: '/uses',
      app: 'This Project is Open Source',
    },
  },
};

export const fetchApi = function(key, setResponse) {
  key = location.pathname === '/' ? 'home' : key;
  if (!(key in sources) && !(key in sources.pages.pages) && key !== 'home') {
    setResponse(false);
    return;
  }

  if (key in sources.pages.pages || key === 'home') {
    key = 'pages';
  }

  idb.get(key).then(resp => resp && setResponse(resp));

  fetch(sources[key].api)
    .then(result => result.json())
    .then(data => {
      const entries = data
        .map(dataSingular => formatResponse(key, dataSingular))
        .filter(entry => entry.title !== '');
      idb.set(key, entries);
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
      data.slides !== '' && entry.links.push([data.slides, 'Slides']);
      data.video !== '' && entry.links.push([data.video, 'Video']);
      break;
    case 'code':
      entry = {
        title: data.title,
        subTitle: data.language,
        content: data.description,
        links: [[data.link, data.publisher]],
      };
      data.demo !== '' && entry.links.push([data.demo, 'Demo']);
      break;
    case 'pages':
      entry = {
        title: data.title,
        content: data.content,
      };
      break;
    default:
      entry = {};
  }

  return {
    supTitle: false,
    title: false,
    subTitle: false,
    content: false,
    links: [],
    ...entry,
  };
};

const formatDate = date => {
  const parts = date.split('-');
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
};
