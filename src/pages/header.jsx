import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useLocation, useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  const paramId = parseFloat(id);
  const location = useLocation();
  let projectName;
  if (paramId) {
    const title = location.state.filter((data) => data.id === paramId);
    projectName = title[0].title;
  }

  return (
    <header>
      {projectName && (
        <Link className="backBtn">
          <IoArrowBackCircleOutline />
        </Link>
      )}

      <nav className="nav-conter">
        <h1>{projectName ? projectName : "React Frontend Challenge"}</h1>
      </nav>
    </header>
  );
};

export default Header;
