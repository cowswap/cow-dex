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
    items: [
      {
        label: 'Pancake (Gouda - BNB)',
        href: 'https://pancakeswap.info/pool/0x7b4b7bb3d157e38c1497d894ccc1946715128ac2',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x14b06bf2c5b0afd259c47c4be39cb9368ef0be3f',
      },
      {
        label: 'Dex.guru',
        href: 'https://dex.guru/token/0x14B06bF2C5B0AFd259c47c4be39cB9368ef0be3f-bsc',
      },
    ],
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
        href: 'https://bscscan.com/address/0x14B06bF2C5B0AFd259c47c4be39cB9368ef0be3f',
      },
      {
        label: 'Audit',
        href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/GoudaToken%20Full%20Smart%20Contract%20Security%20Audit.pdf',
      },
    ],
  },
]

export default config
