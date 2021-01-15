// @desc        GET all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all boot camps' });
};

// @desc        GET single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get boot camp ${req.params.id}` });
};

// @desc        CREATE new bootcamp
// @route       POST /api/v1/bootcamps/
// @access      Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new boot camp' });
};

// @desc        UPDATE new bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update boot camp ${req.params.id}` });
};

// @desc        DELETE bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete boot camp ${req.params.id}` });
};
