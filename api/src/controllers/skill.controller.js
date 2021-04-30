const { response, request } = require('express');
const { skill: Skill } = require('../database/db');

module.exports = {
  create: async (req = request, res = response, next) => {
    try {
      const data = req.body;
      await Skill.destroy({
        where: {},
      });
      data.map(async (d) => {
        await Skill.create(d);
      });
      res.json({
        ok: true,
        msg: 'Skills created successfully!',
      });
    } catch (error) {
      next(error.message);
    }
  },
  read: async (req, res = response, next) => {
    try {
      const data = await Skill.findAll();
      res.json({
        ok: true,
        data,
      });
    } catch (error) {
      next(error.message);
    }
  },
};
