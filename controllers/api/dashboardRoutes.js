const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const user_id = req.session.user_id;

    // Fetch projects from the database for the current user
    const projects = await Project.findAll({
      where: {
        user_id,
      },
    });

    res.render('dashboard', { projects });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
