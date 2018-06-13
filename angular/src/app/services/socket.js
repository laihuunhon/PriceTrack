export default function SocketService() {
  'ngInject'

  // const socket = io.connect('http://localhost:2222')
  const socket = io.connect('http://104.154.29.152:2222')

  return {
    on: (eventName, callback) => {
      socket.on(eventName, callback)
    },
    emit: (eventName, data) => {
      socket.emit(eventName, data)
    }
  }
}