const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'fullstask-demo-app'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/fullstask-demo-app-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'fullstask-demo-app'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/fullstask-demo-app-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'fullstask-demo-app'
    },
    port: process.env.PORT || 3000,
    db: process.eng.DATABASE_URL || 'postgres://localhost/fullstask-demo-app-production'
  }
};

module.exports = config[env];
