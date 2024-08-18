import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ message: "Access Denied" })

    try {
        // const verified = jwt.verify(token, process.env.JWT_SECRET)
        // req.user = verified
        // next()

        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Access Denied!");
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimStart();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); 


    } catch (error) {
        res.status(500).json({ message: `Invalid Token and error is: ${error}` })
    }
}