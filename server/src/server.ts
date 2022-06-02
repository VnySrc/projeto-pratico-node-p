import express from "express"
import http from "http"
import dotenv from "dotenv"
import cors from "cors"
import apiRoutes from "./routes/apiRoutes"
dotenv.config()

const app = express()
const httpServer = http.createServer(app)
app.use(cors())
app.use(express.json())
app.use(apiRoutes)

httpServer.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta: ${process.env.PORT}`)
})