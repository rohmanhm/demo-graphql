import { Server, ServerInterface } from './express';

const port: number = 3000
const server: ServerInterface = new Server(port)

// Fire the server
server.start()
  .catch(err => console.log(`Error, cannot create server. ${ err }`))
  .then(() => console.log(`Running on http://localhost:${ port }`))

export default server
