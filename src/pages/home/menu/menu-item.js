const HomeMenuItem = ({ image, title, path }) => (
  <div className="home-menu-item">
    <img src={image} alt={title} />
    <div className="home-menu-item--title">
      <h2>{title}</h2>
    </div>
  </div>
);

export default HomeMenuItem;
