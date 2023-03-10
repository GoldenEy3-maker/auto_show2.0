import getConfig from "next/config"
import axios from "axios"

const { publicRuntimeConfig } = getConfig()

const axi = axios.create({
  baseURL: `${publicRuntimeConfig.APP_URL}/api`
})

export default axi