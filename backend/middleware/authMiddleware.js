const firebaseAdmin = require('../config/firebaseAdmin');

const extractToken = (req) => {
    if (!req.headers.authorization) {
        return null;
    }
    const [bearer, token] = req.headers.authorization.split(' ');
    if (bearer !== 'Bearer') {
        return null;
    }
    return token;
};

// Authenticate Middleware
module.exports = async (req, res, next) => {
    try {
        const token = extractToken(req);

        if (!token) {
            return res.status(401).json({ error: 'Missing or invalid authorization header' });
        }

        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Invalid token' });
    }
};
