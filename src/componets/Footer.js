import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='bg-gray-600 h-32 w-full flex items-center justify-center pb-5 lg:pb-0'>
      <hr />
      <div className='text-white flex items-center'>
        <a
          href="https://github.com/KarlozOso"
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4'
        >
          <GitHubIcon style={{ fontSize: 60 }} />
          <span className='flex items-center justify-center text-sm font-bold'>GitHub</span>
        </a>
        <a
          href='https://www.linkedin.com/in/carlos-hernandez-espina-4a9a08153/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon style={{ fontSize: 60 }} />
          <span className='flex items-center  text-sm justify-center font-bold'>LinkedIn</span>
        </a>
      </div>
      <div className=''>
        
      </div>
      <div className=''></div>
      <div className=''></div>
    </div>
  );
};

export default Footer;
