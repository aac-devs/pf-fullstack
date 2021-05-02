const { response, request } = require('express');
const { profile: Profile } = require('../database/db');

module.exports = {
  create: async (req = request, res = response, next) => {
    try {
      const data = req.body;
      await Profile.destroy({
        where: {},
      });
      data.map(async (d) => {
        await Profile.create(d);
      });
      res.json({
        ok: true,
        msg: 'Profile created successfully!',
      });
    } catch (error) {
      next(error.message);
    }
  },
  read: async (req, res = response, next) => {
    try {
      const data = await Profile.findAll();
      res.json({
        ok: true,
        data,
      });
    } catch (error) {
      next(error.message);
    }
  },
};
