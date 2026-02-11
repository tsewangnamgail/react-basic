import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {

    if (isLoggedIn) {
        return <h2 className="welcome-message">Welcome {username}</h2>
    }

    return <h2 className="login-prompt">Please login to continue</h2>
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

export default UserGreeting;
