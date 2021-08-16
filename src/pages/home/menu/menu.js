import cookingImg from "../../../media/cooking.JPG";
import galleryImg from "../../../media/photo-gallery.JPG";
import projectsImg from "../../../media/projects.png";
import HomeMenuItem from "./menu-item";

const HomeMenu = () => {
  const items = [
    [cookingImg, "Cooking"],
    [galleryImg, "Photo Gallery"],
    [projectsImg, "Projects"],
  ];

  return (
    <div className="home-menu">
      {items.map(([src, title]) => (
        <HomeMenuItem image={src} title={title} key={title} />
      ))}
    </div>
  );
};

export default HomeMenu;
