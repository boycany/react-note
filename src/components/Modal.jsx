import styles from "./Modal.module.css";
import PropTypes from "prop-types";

function Modal(props) {
    return (
        <>
            <div className={styles.backdrop} onClick={props.onClose} />
            <dialog open className={styles.modal}>
                {props.children}
            </dialog>
        </>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
};

export default Modal;
