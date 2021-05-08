import { useEffect, useState } from 'react'
import { useMultipleContractSingleData } from 'state/multicall/hooks'
import { PAIR_INTERFACE } from 'data/Reserves'
import { Result } from 'ethers/lib/utils'
import BigNumberJs from 'bignumber.js'

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_BNB: string
    }
  }
}

const api = 'https://api.pancakeswap.info/api/tokens'
const GOUDA_BNB_POOL = process.env.REACT_APP_GOUDA_BNB_POOL || "0x07A4f5fd727Cb340226E6Dc0F329c2f6f4c7076C"
const BUSD_BNB_POOL = process.env.REACT_APP_GOUDA_BNB_POOL || "0x0f8B25d01b2498eE3a2EaFdAEe64d0A0797607df"

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export const useGetPriceDataFromLP = () => {
  const [responseGoudaBnb] = useMultipleContractSingleData([GOUDA_BNB_POOL], PAIR_INTERFACE, 'getReserves')
  const [responseBusdBnb] = useMultipleContractSingleData([BUSD_BNB_POOL], PAIR_INTERFACE, 'getReserves')
  if (responseGoudaBnb.loading === false && responseBusdBnb.loading === false) {
    const resultGoudaBnb = responseGoudaBnb.result as Result;
    const resultBusdBnb = responseBusdBnb.result as Result;
    if (resultGoudaBnb && resultBusdBnb) {
      const bananaReserve = new BigNumberJs(resultGoudaBnb[0]._hex)
      const busdReserve = new BigNumberJs(resultBusdBnb[0]._hex)
      const goudaUsd = busdReserve.div(bananaReserve)
      return goudaUsd.toNumber()
    }
  }

  return undefined
}

export default useGetPriceData
