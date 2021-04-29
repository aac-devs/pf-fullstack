const { response, request } = require('express');

module.exports = {
  texts: async (req = request, res = response, next) => {
    try {
      const data = req.body;
      res.json({
        ok: true,
        data,
      });
    } catch (error) {
      next(error.message);
    }
  },
};
