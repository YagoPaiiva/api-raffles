import { io } from "./Http"
import { Socket } from "socket.io"

io.on('connection', function (socket:Socket) {
  console.log(socket.id)
})