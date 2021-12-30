const { createModel } = require('manikin-model');
const PropTypes = require('prop-types');

const Manufacturer = createModel('Manufacturer', {
    id: null,

    name: null,

    websiteUrl: null,

    logoUrl: null,
});

Manufacturer.prototype.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    websiteUrl: PropTypes.string,
    logoUrl: PropTypes.string,
};

module.exports = Manufacturer;
