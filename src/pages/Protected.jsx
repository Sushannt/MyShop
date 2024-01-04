import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Protected = ({ Component }) => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo?.authToken) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return <Component />;
};

export default Protected;

Protected.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
