import React from 'react'
import styles from './Footer.module.css'

const footerLinks = [
  'Destinations',
  'Activities',
  'About Us',
  'Contact',
  'Privacy Policy',
]

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div>Company name</div>
      <div className={styles.footerNavigation}>
        {footerLinks.map((link, index) => (
          <li className={styles.footerNavLink} key={index + 1}>
            {link}
          </li>
        ))}
      </div>
    </div>
  )
}
