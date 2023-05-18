import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token
    const decode = jwt.verify(token, process.env.JWT_SEC)
    next()
}