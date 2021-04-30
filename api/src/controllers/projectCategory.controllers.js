const { response, request } = require('express');
const { project_category: ProjectCategory } = require('../database/db');

module.exports = {
  create: async (req = request, res = response, next) => {
    try {
      const data = req.body;
      await ProjectCategory.destroy({
        where: {},
      });
      data.map(async (d) => {
        await ProjectCategory.create(d);
      });
      res.json({
        ok: true,
        msg: 'Project categories created successfully!',
      });
    } catch (error) {
      next(error.message);
    }
  },
  read: async (req, res = response, next) => {
    try {
      const data = await ProjectCategory.findAll();
      res.json({
        ok: true,
        data,
      });
    } catch (error) {
      next(error.message);
    }
  },
};
