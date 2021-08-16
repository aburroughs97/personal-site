import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Twitter } from "./icons/twitter.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";

const icons = {
  facebook: <Facebook />,
  twitter: <Twitter />,
  instagram: <Instagram />,
};

const SocialIcon = ({ type }) => (
  <div className="social-icon">{icons[type.toLowerCase()]}</div>
);

export default SocialIcon;
