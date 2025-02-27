import { eventLogger, LOGG_LEVELS } from './log.mjs';

export function startSession(req, res, next) {
    if (!req.session) {
        req.session = {};
        eventLogger(`New session started for ${req.method} ${req.url}`, LOGG_LEVELS.VERBOSE);
    }
    eventLogger(`Session active for ${req.method} ${req.url}`, LOGG_LEVELS.VERBOSE);
    next();
}

export function updateSession(req, res, next) {
    if (req.session) {
        req.session.lastAccess = Date.now();
        eventLogger(`Session updated for ${req.method} ${req.url}`, LOGG_LEVELS.IMPORTANT);
    }
    next();
}

export function verifySession(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.status(403).json({ message: "Session is invalid or expired" });
    }
    eventLogger(`Session verified for ${req.method} ${req.url}`, LOGG_LEVELS.VERBOSE);
    next();
}
