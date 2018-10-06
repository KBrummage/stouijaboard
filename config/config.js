module.exports = {
  development: {
    username: "root",
    password: process.env.DBPASSWORD,
    database: "storydb",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.DBPASSWORD,
    database: "storydb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL", //eslint-disable-line
    dialect: "mysql"
  }
};
