import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import FooterThree from '@/src/layout/footers/footer';
import FaqArea from '../homes/home/faq-area';

const About = () => {
    return (
        <>
          <HeaderOne />  
          <main>
            <Breadcrumb top_title="Our Company"  page_title="Our Company" />
           <div style={{margin: '20vh auto'}}>
           <FaqArea/>
           </div>
          </main>
          <FooterThree />
        </>
    );
};

export default About;