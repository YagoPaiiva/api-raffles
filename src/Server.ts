import { httpServer } from './Http'
import './WebSocket'

httpServer.listen(process.env.PORT, function () {
  console.log(`Server runing in port http://localhost:${process.env.PORT}`)
})
