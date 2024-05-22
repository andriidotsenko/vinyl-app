import PropTypes from "prop-types";
import styles from "./HeaderCountingButton.module.css";
import { Link } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { memo } from "react";

function HeaderCountingButton({ count, icon }) {
  const formatNumber = (number) =>
    number >= 1e6
      ? (number / 1e6).toFixed(0) + "M"
      : number >= 1e3
      ? (number / 1e3).toFixed(0) + "K"
      : number.toFixed(0);
  const formattedCount = count < 1 ? 0 : count;

  return (
    <Link to="/" className={styles.icon}>
      {icon}
      {formattedCount > 0 && (
        <div className={styles.wrapperCounter}>
          <SwitchTransition>
            <CSSTransition
              key={formattedCount}
              timeout={200}
              classNames={styles}
            >
              <div className={styles.counter}>
                {formatNumber(formattedCount)}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      )}
    </Link>
  );
}

HeaderCountingButton.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

const MemoizedHeaderCountingButton = memo(HeaderCountingButton);
export default MemoizedHeaderCountingButton;
