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
const GOUDA_BNB_POOL = process.env.REACT_APP_GOUDA_BNB_POOL || "0xf86334CB105F76F4EBbC13265F3A170AEDBA686b"

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
  const wbnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  const bnbPrice = useGetPriceData()?.data?.[wbnbAddress].price
  console.log(bnbPrice)
  const [responseGoudaBnb] = useMultipleContractSingleData([GOUDA_BNB_POOL], PAIR_INTERFACE, 'getReserves')
  console.log(responseGoudaBnb)
  if (responseGoudaBnb.loading === false && bnbPrice) {
    const resultGoudaBnb = responseGoudaBnb.result as Result;
    if (resultGoudaBnb) {
      const bananaReserve = new BigNumberJs(resultGoudaBnb[0]._hex)
      const bnbReserve = new BigNumberJs(resultGoudaBnb[1]._hex)
      const goudaUsd = bnbReserve.div(bananaReserve)
      console.log(goudaUsd.toNumber())
      return new BigNumberJs(bnbPrice).times(goudaUsd).toNumber()
    }
  }

  return undefined
}

export default useGetPriceData
