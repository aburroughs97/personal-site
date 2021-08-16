import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeMenu from "./menu";

const Home = () => {
  return (
    <div className="home">
      <HomeMenu />
      <div className="bible-quote">
        <h5>
          "Have I not commanded you? Be strong and courageous. Do not be afraid;
          do not be discouraged, for the Lord your God will be with you
          whereveryou go."
        </h5>
        <p>- Joshua 1:9 NIV</p>
      </div>
      <div className="read-more">
        <FontAwesomeIcon icon={faArrowDown} size="lg" />
      </div>
    </div>
  );
};

export default Home;
