const { createModel } = require('manikin-model');
const PropTypes = require('prop-types');

const User = createModel('User', {
    id: null,

    email: null,

    username: null,

    password: null,

    token: null,
});

User.prototype.propTypes = {
    id: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string,
};

module.exports = User;
