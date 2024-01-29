import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from "./MainHeader.module.css";
import PropTypes from "prop-types";

function MainHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <MdMessage />
                Note
            </h1>
            <p>
                <Link to="/create-post" className={styles.button}>
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    );
}

MainHeader.propTypes = {
    onCreatePost: PropTypes.func,
};

export default MainHeader;
