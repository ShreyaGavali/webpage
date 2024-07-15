import React,{useState} from 'react'
import ContactUs from './pages/ContactUs'
import ContactUsForm from './pages/ContactUsForm'
import WhatWeDo from './pages/WhatWeDo'
import OurProject from './pages/OurProject'
import WhyChooseUs from './pages/WhyChooseUs'
import Growth from './pages/Growth'

const App = () => {
  const [isContactPopupVisible, setContactPopupVisible] = useState(false)
  const showContactPopup = () => setContactPopupVisible(true)
  const hideContactPopup = () => setContactPopupVisible(false)
  return (
    <div>
      <>
      <ContactUs onContactClick={showContactPopup} />
      <WhatWeDo />
      <OurProject />
      <WhyChooseUs />
      <Growth />
      </>
      {isContactPopupVisible && <ContactUsForm onClose={hideContactPopup} />}
    </div>
  )
}

export default App