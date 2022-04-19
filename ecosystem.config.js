module.exports = {
    apps : [{
      name   : "limit worker",
      script : "app.js",
      args   : "limit"
    },{
      name   : "rotate worker",
      script : "app.js",
      args   : "rotate"
    }]
  }