const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

exports.register = [
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please enter a valid email address'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
    handleValidationErrors,
];

exports.login = [
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please enter a valid email address'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
    handleValidationErrors,
];

exports.updateProfile = [
    // Add necessary validation rules for updating the user profile
    handleValidationErrors,
];
