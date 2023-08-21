import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import WalletConnectV2Card from '../components/connectorCards/WalletConnectV2Card'
import ProviderExample from '../components/ProviderExample'
import BloctoCard from '../components/connectorCards/BloctoCard'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <BloctoCard />
      </div>
    </>
  )
}
