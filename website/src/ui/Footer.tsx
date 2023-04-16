import JSOceanIcon from './icons/JSOceanIcon';
import React from 'react';
import EmailIcon from './icons/EmailIcon';
import BugIcon from './icons/BugIcon';

const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-center text-center bg-white px-4 py-6">

            <span className="flex items-center justify-center mx-4 my-2">
                <JSOceanIcon />
                <span className="ml-2">JSOcean.</span>
            </span>

            <span className="flex items-center justify-center mx-4 my-2">
               &copy; All rights reserved.
            </span>

            <a href="mailto:jsoceandiver@gmail.com?subject=SVG Stripes Maker" title="" className="mx-4 my-2 flex items-center">
                <EmailIcon /> <span className="ml-2 underline">Contact Us</span>
            </a>

            <a href="mailto:jsoceandiver@gmail.com?subject=SVG Stripes Maker Bug" title="" className="mx-4 my-2 flex items-center">
                <BugIcon /> <span className="ml-2 underline">Found a bug? Let us know.</span>
            </a>

        </footer>
    )
};

export default Footer;