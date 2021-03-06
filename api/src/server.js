/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./database/db');
const profileRoutes = require('./routes/profile.routes');
const skillRoutes = require('./routes/skill.routes');
const projectRoutes = require('./routes/project.routes');
const contactRoutes = require('./routes/contact.routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.host = process.env.HOST;
    this.paths = {
      skill: '/skill',
      profile: '/profile',
      project: '/project',
      contact: '/contact',
    };

    this.middlewares();
    this.routes();
  }

  static async connectDB() {
    try {
      await sequelize.sync({ force: false });
      console.log('Postgresql database online.');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.skill, skillRoutes);
    this.app.use(this.paths.profile, profileRoutes);
    this.app.use(this.paths.project, projectRoutes);
    this.app.use(this.paths.contact, contactRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at ${this.host}:${this.port}`);
    });
  }
}

module.exports = Server;
