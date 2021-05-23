import { useEffect } from 'react'
import { useGetPriceDataFromLP } from './useGetPriceData'
// import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const cakePriceUsd = useGetPriceDataFromLP()

  // const cakePriceUsd = priceData ? parseFloat(priceData.data[CAKE.address].price) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${(cakePriceUsd || 0).toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `Cowswap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
