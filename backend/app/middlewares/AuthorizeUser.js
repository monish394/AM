export const AuthorizeUser = (permitedRoles) => {
    return (req, res, next) => {
        if (!req.role) {
            return res.status(401).json({ err: "Authorization failed" });
        }

        if (!permitedRoles.includes(req.role)) {
            return res.status(403).json({ err: "Access Denied" });
        }

        next();
    };
};
