import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/prakhar-masih-004ba6214"><FaLinkedin /></a>
      </div>

      <div>
        <a href="https://twitter.com/MasihPrakhar?t=SQ_U47wyhRfe909fghdkYw&s=09"><BsTwitter /></a>
      </div>

      <div>
        <a href="https://github.com/PrakharMasih"><FaGithub /></a>
      </div>
    </div>
  )
}

export default SocialMedia