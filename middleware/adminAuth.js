const jwt = require('jsonwebtoken');
const { User } = require('../models/Project');

const adminAuth = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'No authentication token, access denied' });
        }

        // Verify token
        const decoded = jwt.verify(token, '86260fdbfddda9a87053810e4b1123b00902a786310963c223f168983a8c04ee8a90eb87f4008a0527472cfbbabb22e88e2ae763a7c0090a8834da5755ee5793');
        
        // Get user from database
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Check if user is admin
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admin only.' });
        }

        // Add user to request object
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is invalid' });
    }
};

module.exports = adminAuth; 