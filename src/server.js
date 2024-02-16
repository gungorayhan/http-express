const app = require("./app/expressApp")
const { createServer } = require("http")
const server = () => {
    const server = createServer(app)

    server.listen(5000, () => {
        console.log("http server listening")
    })
    // app.listen(5000, () => {
    //     console.log("port on 5000")
    // })

    // console.log(server)
}


server();