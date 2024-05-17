import app from '../infra/http/ExpressAdpter'

const port = parseInt(process.env.APP_PORT as string) || 3000

app.listen(port, () => {
  console.log('\x1b[33m%s\x1b[0m', `=> 🚀 Server running on the port: ${port}`)
})