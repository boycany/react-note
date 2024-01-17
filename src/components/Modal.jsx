import styles from "./Modal.module.css";
import PropTypes from "prop-types";

function Modal(props) {
    return (
        <div className={styles.backdrop}>
            <dialog className={styles.modal}>{props.children}</dialog>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
