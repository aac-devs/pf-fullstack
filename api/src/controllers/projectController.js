const { response, request } = require('express');
const { project: Project } = require('../database/db');

module.exports = {
  create: async (req = request, res = response, next) => {
    try {
      const data = req.body;
      await Project.destroy({
        where: {},
      });
      data.map(async (d) => {
        await Project.create(d);
      });
      res.json({
        ok: true,
        msg: 'Projects created successfully!',
      });
    } catch (error) {
      next(error.message);
    }
  },
  read: async (req, res = response, next) => {
    try {
      const data = await Project.findAll();
      res.json({
        ok: true,
        data,
      });
    } catch (error) {
      next(error.message);
    }
  },
};
