const config = require("./config");
const scheduler = require("./scheduler")

// corn.schedule("* * * * * *", function () {
//     console.log("sheduling running...");
//     if (shelljs.exec("dir").code !== 0) {
//         console.log("something wrong...");
//     }
// })

scheduler.initCrons(config);