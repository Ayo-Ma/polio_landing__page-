import AmazonLogo from '../Assets/Logos/Clients/Amazon_logo.svg'
import CocaColaLogo from '../Assets/Logos/Clients/Coca-Cola_logo.svg'
import FedExLogo from '../Assets/Logos/Clients/FedEx_Express.svg'
import IBMLogo from '../Assets/Logos/Clients/IBM_logo.svg'
import NikeLogo from '../Assets/Logos/Clients/Logo_NIKE.svg'
import WalmartLogo from '../Assets/Logos/Clients/Walmart_logo.svg'
import '../css/social-proof.css'
const SocialProof = () => {
  return (
    <section className="social-proof wrapper">
        <p>Trusted by Fortune 500 companies</p>
        <div className="Logo">
            <div className="logos"><img src={AmazonLogo} alt="" /></div>
            <div className="logos"><img src={CocaColaLogo} alt="" /></div>
            <div className="logos"><img src={FedExLogo} alt="" /></div>
            <div className="logos"><img src={IBMLogo} alt="" /></div>
            <div className="logos"><img src={NikeLogo} alt="" /></div>
            <div className="logos"><img src={WalmartLogo} alt="" /></div>
        </div>
    </section>
  )
}

export default SocialProof