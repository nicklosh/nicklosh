import './styles/LinkMenu.scss';
import React from 'react';

export default function LinkMenu() {
  const links = [
    {
      site: 'bandcamp',
      url : 'https://nicklosh.bandcamp.com/'
    },
    {
      site: 'soundcloud',
      url : "https://soundcloud.com/nicklosh"
    },
    {
      site: 'instagram',  
      url : "https://www.instagram.com/nicklosh/"
    },
  ]

  return (
    <ul className="links">
      {links.map((link) => (
        <li key={link.site}><a href={link.url} target="_blank" rel="noreferrer">{link.site}</a></li>
      ))}
    </ul>
  )
}
