import { Button } from "../Button/Button.jsx";
import PropTypes from "prop-types";

export const SearchButton = ({ onClick }) => {
  return (
    <Button variant={"primary"} isFullWidth onClick={onClick}>
      {"Search"}
    </Button>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

export default SearchButton;
