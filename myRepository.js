const mssql = require('mssql');

const sqlConfig ={
    user: 'sa',
    password: '<YourStrong@Passw0rd>',
    database: 'FuelManagementDB',
    server: 'localhost',
    port: 1433,
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis:30000
    },
    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}

const appPool = new mssql.ConnectionPool(sqlConfig);

//-----------------------------------------------------------

const GetMembersBalanceDetails = async ()=>{
    const myConnectionPoolToDB = await appPool.connect();
    let results = await myConnectionPoolToDB.request().execute('GetMembersBalanceDetails');
    return results;
}
module.exports.GetMembersBalanceDetails = GetMembersBalanceDetails;

//--------------------------------------------------------------
