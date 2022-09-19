import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackArrow = () => {
  return (
    <div style={{ width: "100%", padding: "1em 0" }}>
      <Link to="/">
        <div>
        <IoArrowBackOutline size="4em" color="#09092b" />

        </div>
      </Link>
    </div>
  );
};

export default BackArrow;
