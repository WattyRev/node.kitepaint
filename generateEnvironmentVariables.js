fs = require('fs');

const fileName = '.env.yaml';
const contents = `
service: ${process.env.SERVICE_NAME}
env_variables:
    SQL_USER: ${process.env.SQL_USER}
    SQL_DATABASE: ${process.env.SQL_DATABASE}
    SQL_PASSWORD: ${process.env.SQL_PASSWORD}
    INSTANCE_CONNECTION_NAME: ${process.env.INSTANCE_CONNECTION_NAME}
`;

fs.writeFileSync(fileName, contents);
