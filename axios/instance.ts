import getConfig from "next/config"
import axios from "axios"

const { publicRuntimeConfig } = getConfig()

const { APP_URL } = publicRuntimeConfig

const axi = axios.create({
  baseURL: `${APP_URL}/api`
})

export default axi