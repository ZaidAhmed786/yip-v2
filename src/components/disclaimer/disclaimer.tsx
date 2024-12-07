import React from 'react'
import styles from './disclaimer.module.css'
const Discliamer = ({ provider }: any) => {
  return (
    <div className={styles.disclaimer_section}>
      <h2>Disclaimer</h2>
      <p> This is not an official website of {provider} or any Telecommunication Service Provider but Official Site of Yourinternetprovider (Marketing Partner). All of the logos used in Yourinternetprovider are the property of their respective owners and are protected by copyright and trademark laws. All trademarks, logos, and related symbols remain the property of their respective owners and are used by Yourinternetprovider solely to describe the products and services offered by each respective trademark holder. The use of any third-party trademarks on this site does not indicate any relationship between Yourinternetprovider and the holders of those trademarks, nor does it imply any endorsement of Yourinternetprovider by the holders of those trademarks. We may send updates to the mobile number/email id registered with us. The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability.


      </p>
    </div>
  )
}

export default Discliamer