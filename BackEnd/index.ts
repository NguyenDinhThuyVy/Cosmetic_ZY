import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import helmet from 'helmet'
import { connectMongoDB } from './database/database'
import adminRoutes from './routes/admin/index.route'
import commonRoutes from './routes/common/index.route'
import userRoutes from './routes/user/index.route'
import { responseError } from './utils/response'
import { FOLDERS, FOLDER_UPLOAD, ROUTE_IMAGE } from './constants/config'
import axios from 'axios'
import path from 'path'
import { isProduction } from './utils/helper'
require('dotenv').config()

const app: express.Application = express()
connectMongoDB()
const routes = [{ ...commonRoutes }, { ...userRoutes }, { ...adminRoutes }]
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dirNameWithEnv = isProduction ? path.dirname(__dirname) : __dirname

const handlerImage: any = Object.values(FOLDERS).reduce(
  (result: any, current: any) => {
    return [
      ...result,
      express.static(path.join(dirNameWithEnv, `/${FOLDER_UPLOAD}/${current}`)),
    ]
  },
  [express.static(path.join(dirNameWithEnv, `/${FOLDER_UPLOAD}`))]
)

app.use(`/${ROUTE_IMAGE}`, ...handlerImage)

routes.forEach((item) =>
  item.routes.forEach((route) => app.use(item.prefix + route.path, route.route))
)
app.use(function (err: any, req: any, res: any, next: any) {
  responseError(res, err)
})
const getOauthGoogleToken = async (code) => {
  const body = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_AUTHORIZED_REDIRECT_URI,
  }
  const { data } = await axios.post(
    'https://oauth2.googleapis.com/token',
    body,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
  return data
}
app.get('/api/oauth/google', async (req, res, next) => {
  try {
    const { code } = req.query
    const data = await getOauthGoogleToken(code)
    console.log(code)
    console.log(data)
    const { id_token, acccess_token } = data
    // const googleUser = await getGoogleUser({ id_token, acccess_token })

    // if (!googleUser.verified_email) {
    //   return res.status(403).json({
    //     message: 'Google email not verified',
    //   })
    // }

    // const manual_access_token = jwt.sign(
    //   {
    //     email: googleUser.email,
    //     type: acccess_token,
    //   },
    //   process.env.AC_PRIVATE_KEY,
    //   { expiresIn: '15m' }
    // )
    return res.redirect(`http://localhost:3000/login/oauth`)
  } catch (error) {
    next(error)
  }
})

app.listen(process.env.PORT, function () {
  // console.log(chalk.greenBright(`API listening on port ${process.env.PORT}!`))
})
