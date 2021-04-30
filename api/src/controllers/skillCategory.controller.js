const { response, request } = require('express');
const { skill_category: SkillCategory } = require('../database/db');

module.exports = {
  create: async (req = request, res = response, next) => {
    try {
      const data = req.body;
      await SkillCategory.destroy({
        where: {},
      });
      data.map(async (d) => {
        await SkillCategory.create(d);
      });
      res.json({
        ok: true,
        msg: 'Skill categories created successfully!',
      });
    } catch (error) {
      next(error.message);
    }
  },
  read: async (req, res = response, next) => {
    try {
      const data = await SkillCategory.findAll();
      res.json({
        ok: true,
        data,
      });
    } catch (error) {
      next(error.message);
    }
  },
};
