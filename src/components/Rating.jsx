import FullStar from "./RatingIcons/FullStar";
import EmptyStar from "./RatingIcons/EmptyStar";
import PropTypes from "prop-types";

const Rating = ({ value }) => {
  return (
    <>
      <span>{value >= 1 ? <FullStar /> : <EmptyStar />}</span>
      <span>{value >= 2 ? <FullStar /> : <EmptyStar />}</span>
      <span>{value >= 3 ? <FullStar /> : <EmptyStar />}</span>
      <span>{value >= 4 ? <FullStar /> : <EmptyStar />}</span>
      <span>{value >= 5 ? <FullStar /> : <EmptyStar />}</span>
    </>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
