const baseRoutes = require("./base.routes.js")

const appRoutes = (app) => {
    app.use("/", baseRoutes)    
}

module.exports = appRoutes;
