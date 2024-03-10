import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import CollectionIcon from "../Icon/CollectionIcon";
import AddIcon from "../Icon/AddIcon";

export const CollectionButton = ({ isActive, onClick }) => {
  return (
    <Button
      variant={isActive ? "secondary" : "primary"}
      isFullWidth
      onClick={onClick}
      icon={isActive ? <CollectionIcon /> : <AddIcon />}
    >
      {isActive ? "In collection" : "Add"}
    </Button>
  );
};

CollectionButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default CollectionButton;
