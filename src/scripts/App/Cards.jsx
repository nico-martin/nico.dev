import { h } from 'preact';

export const CardList = ({ className = '', children }) => {
  return <div className={className + ' card-list'}>{children}</div>;
};

export const Card = ({ entry }) => {
  return (
    <div className="card">
      {entry.supTitle !== false && (
        <p className="card__suptitle">{entry.supTitle}</p>
      )}
      {entry.title !== false && <h2 className="card__title">{entry.title}</h2>}
      {entry.subTitle !== false && (
        <p className="card__subtitle">{entry.subTitle}</p>
      )}
      {entry.content !== false && (
        <p className="card__content">{entry.content}</p>
      )}
      {entry.links.length !== 0 && (
        <p className="card__links">
          {entry.links.map(link => (
            <a href={link[0]} target="_blank">
              {link[1]}
              <i className="icon-arrow-right" />
            </a>
          ))}
        </p>
      )}
    </div>
  );
};
