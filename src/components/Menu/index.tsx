import React, { useContext } from 'react'
import { Menu as UikitMenu} from '@cowswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages, Language } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import { useGetPriceDataFromLP } from 'hooks/useGetPriceData'
import useTheme from 'hooks/useTheme'

import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import links from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  // const priceData = useGetPriceData()
  // const cakePriceUsd = priceData ? Number(priceData.data[CAKE.address].price) : undefined
  const lpPrice = useGetPriceDataFromLP()
  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={(langType) => {
        setSelectedLanguage(langType as Language)
      }}
      cakePriceUsd={lpPrice}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
