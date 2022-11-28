const developmentInstance = {
  DB: "ecomm_db",
  USER: "root",
  HOST: "localhost",
  PASSWORD: "Mysql@shu1",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
};

const testInstance = {
  DB: "ecomm_test_db",
  USER: "root",
  PASSWORD: "Mysql@shu1",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
};

module.exports = { development: developmentInstance, test: testInstance };
