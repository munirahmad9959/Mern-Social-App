import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    let token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }

    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trimStart();
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ message: `Invalid Token. Error: ${error.message}` });
    }
}
