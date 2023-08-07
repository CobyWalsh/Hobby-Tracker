const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to route if the user is not signed in
router.get('/', withAuth, async (req, res) => {
  try {
    const fk_user = req.session.user_id;

    // Get all projects from the database for the current user
    const projectData = await Project.findAll({
      where: {
        fk_user,
      },
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('project', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route if the user is not signed in
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('project', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    // Redirect the request to the home route if the user is already signed in
    res.redirect('/');
    return;
  }

  // Render the login page if the user is not signed in
  res.render('homepage');
});

module.exports = router;
