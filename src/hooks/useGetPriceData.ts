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
// const GOUDA_BNB_POOL = process.env.REACT_APP_GOUDA_BNB_POOL || "0xf86334CB105F76F4EBbC13265F3A170AEDBA686b"
const GOUDA_BUSD_POOL = process.env.REACT_APP_GOUDA_BUSD_POOL || "0x40407d0b500ec2a0FfbB0f5fbc03f12a1CEebB93"

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
  const [response] = useMultipleContractSingleData([GOUDA_BUSD_POOL], PAIR_INTERFACE, 'getReserves')
  if (response.loading === false) {
    const result = response.result as Result;
    if (result) {
      const goudaReserve = new BigNumberJs(result[0]._hex)
      const busdReserve = new BigNumberJs(result[1]._hex)
      const goudaUsd = busdReserve.div(goudaReserve)
      return goudaUsd.toNumber()
    }
  }
  return 0.5
}

export default useGetPriceData
