const { createModel } = require('manikin-model');
const PropTypes = require('prop-types');

const Manufacturer = createModel('Manufacturer', {
    billingEmailAddress: null,
    contactEmailAddress: null,
    contactName: null,
    createdDateTime: null,
    id: null,
    invoiceAmount: null,
    invoicePaidDateTime: null,
    isActive: null,
    logoUrl: null,
    name: null,
    updatedDateTime: null,
    websiteUrl: null,

    buildAdminPayload() {
        return this.getProperties(
            'billingEmailAddress',
            'contactEmailAddress',
            'contactName',
            'createdDateTime',
            'id',
            'invoiceAmount',
            'invoicePaidDateTime',
            'isActive',
            'logoUrl',
            'name',
            'updatedDateTime',
            'websiteUrl'
        );
    },
    buildPublicPayload() {
        return this.getProperties('id', 'name', 'websiteUrl', 'logoUrl');
    },
});

Manufacturer.prototype.propTypes = {
    billingEmailAddress: PropTypes.string,
    contactEmailAddress: PropTypes.string,
    contactName: PropTypes.string,
    createdDateTime: PropTypes.string,
    id: PropTypes.string,
    invoiceAmount: PropTypes.number,
    invoicePaidDateTime: PropTypes.string,
    isActive: PropTypes.bool,
    logoUrl: PropTypes.string,
    name: PropTypes.string,
    updatedDateTime: PropTypes.string,
    websiteUrl: PropTypes.string,
};

function transformManufacturer(dynamoManufacturer) {
    return new Manufacturer({
        billingEmailAddress: dynamoManufacturer.billingEmailAddress,
        contactEmailAddress: dynamoManufacturer.contactEmailAddress,
        contactName: dynamoManufacturer.contactName,
        createdDateTime: dynamoManufacturer.createdDateTime,
        id: dynamoManufacturer.id,
        invoiceAmount: dynamoManufacturer.invoiceAmount,
        invoicePaidDateTime: dynamoManufacturer.invoicePaidDateTime,
        isActive: dynamoManufacturer.isActive,
        logoUrl: dynamoManufacturer.logoUrl,
        name: dynamoManufacturer.name,
        updatedDateTime: dynamoManufacturer.updatedDateTime,
        websiteUrl: dynamoManufacturer.websiteUrl,
    });
}

module.exports = {
    Manufacturer,
    transformManufacturer,
};
