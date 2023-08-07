const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes.js');
const imageRoutes = require('./imageRoutes.js');
const materialRoutes = require('./materialRoutes.js');
const noteRoutes = require('./noteRoutes.js');
const projectRoutes = require('./projectRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/images', imageRoutes);
router.use('/materials', materialRoutes);
router.use('/notes', noteRoutes);
router.use('/projects', projectRoutes);
router.use('/users', userRoutes);

module.exports = router;
