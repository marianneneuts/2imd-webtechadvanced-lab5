const logger = (req, res, next) => {
    console.log("🚀");
    next();
}

module.exports = logger;
