fs = require('fs');

const fileName = 'app.yaml';
const contents = `
service: ${process.env.SERVICE_NAME}
runtime: nodejs12
instance_class: F2
env_variables:
    SQL_USER: ${process.env.SQL_USER}
    SQL_DATABASE: ${process.env.SQL_DATABASE}
    SQL_PASSWORD: ${process.env.SQL_PASSWORD}
    INSTANCE_CONNECTION_NAME: ${process.env.INSTANCE_CONNECTION_NAME}
`;

fs.writeFileSync(fileName, contents);
