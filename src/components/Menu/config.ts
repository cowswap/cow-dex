import { MenuEntry } from '@pancakeswap-libs/uikit'
import { isMainnet } from 'constants/index'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://cowswap.app/',
  },
  {
    label: 'Presale',
    icon: 'PresaleIcon',
    href: 'https://cowswap.app/presale',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: isMainnet ? 'https://cowswap.app/farms' : 'https://testnet.cowswap.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: isMainnet ? 'https://cowswap.app/pools' : 'https://testnet.cowswap.app/pools',
  },
  // {
  //   label: 'Prediction',
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  //   status: {
  //     text: 'BETA',
  //     color: 'warning',
  //   },
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  {
    label: 'NFT',
    icon: 'TeamBattleIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: '/',
    // items: [
    //   {
    //     label: 'Overview',
    //     href: 'https://cowswap.info',
    //   },
    //   {
    //     label: 'Tokens',
    //     href: 'https://cowswap.info/tokens',
    //   },
    //   {
    //     label: 'Pairs',
    //     href: 'https://cowswap.info/pairs',
    //   },
    //   {
    //     label: 'Accounts',
    //     href: 'https://cowswap.info/accounts',
    //   },
    // ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    href: '/',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cowswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.cowswap.app',
      },
      {
        label: 'Gouda Contract',
        href: 'https://bscscan.com/address/0x90c2b27f2a71550714e14f4c882d908cdd46aa4b',
      },
      {
        label: 'Audit',
        href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/GoudaToken%20Full%20Smart%20Contract%20Security%20Audit.pdf',
      },
    ],
  },
]

export default config
