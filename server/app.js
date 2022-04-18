import { createServer } from 'http'
import express from 'express'
import * as socketIo from 'socket.io'
import easyrtc from 'open-easyrtc'


// Порт запуска сервиса, по умолчанию 8080
const port = process.env.PORT || 8080
// Экземпляр приложения Express
const app = express()
// Express http сервер
const webServer = createServer(app)

// Добавление каталога со статикой
app.use(express.static('client'))

// Старт сервиса на указанном порту
webServer.listen(port, () => {
  console.log('listening on http://localhost:' + port)
})

// Старт Socket.io
const socketServer = new socketIo.Server(webServer)
const myIceServers = [
  { url: 'stun:stun.l.google.com:19302' },
  { url: 'stun:stun1.l.google.com:19302' },
  { url: 'stun:stun2.l.google.com:19302' },
  { url: 'stun:stun3.l.google.com:19302' }
]

easyrtc.setOption('appIceServers', myIceServers)

// Старт EasyRTC
easyrtc.listen(app, socketServer, null, (err, rtcRef) => {
  if (err) {
    console.error(err)
    process.exit()
  }
  console.log('Initiated')
  rtcRef.events.on('roomCreate', (appObj, creatorConnectionObj, roomName, roomOptions, callback) => {
    console.log('roomCreate fired! Trying to create: ' + roomName)
    appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback)
  })
})
