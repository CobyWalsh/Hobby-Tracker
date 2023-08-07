const { v4: uuidv4 } = require('uuid');

const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    await Project.create({
      ...req.body,
      fk_user: req.session.user_id,
    });

    res.status(200).redirect('/');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        fk_user: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).redirect('/');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
