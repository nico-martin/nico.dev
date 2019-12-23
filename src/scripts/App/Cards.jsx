import { render, h, Component, Fragment } from 'preact';

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
      {entry.content !== false && entry.content}
      {entry.links.length !== 0 && (
        <div className="card__links">
          {entry.links.map(link => (
            <a href={link[0]}>{link[1]}</a>
          ))}
        </div>
      )}
    </div>
  );
};
