// // ABOUT (Profile Card)

import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, LinkedinIcon, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className='about_container'>
      <Image
        src='/assets/images/about-img.jpg'
        alt='Sofia Soromenho'
        width={500}
        height={1100}
        className='about_img'
      />
      <div className='about_info'>
        <h2 className='about_title'>Sofia Soromenho</h2>
        <p className='about_desc'>Dancer Teacher Writer Choreogropher Phd </p>
        <p className='about_text'>
          I hold a Master in Artistic Performance/Dance from FMH and degree in
          Dance/Performance from Escola Superior de Dança (IPL). Scholarship
          holder (BGCT) at INET-md since 2019. I collaborate with
          <i>Jornal de Letras</i> as a Dance critic since 2013. I was a teacher
          at ESTAL (2012-17) where I taught the following subjects: Body and
          Creation Processes, Technical Training of the Performer and I also
          directed the creation of a show for the Bachelor degree finalists
          named<i>[para]grafo</i>. Furthermore, I worked as an interpreter with
          different independent choreographers and between 2012 and 2017 I was
          an interpreter for CIM in Edge. As a choreographer, 2nd Paragraph
          (2015) stands out. I collaborate with visual artists in the area of
          ​​performance, particularly with Fiumani.
        </p>

        <div className='about_social'>
          <Link
            href='https://www.instagram.com/soromenho.s/'
            target='_blank'
            rel='noopener noreferrer'
            className='about_social_icon'
          >
            <InstagramIcon />
          </Link>
          <Link
            href='https://www.facebook.com/soromenho.s'
            target='_blank'
            rel='noopener noreferrer'
            className='about_social_icon'
          >
            <FacebookIcon />
          </Link>
          <Link
            href='https://www.linkedin.com/in/sofia-soromenho-9b0b0b1b/'
            target='_blank'
            rel='noopener noreferrer'
            className='about_social_icon'
          >
            <LinkedinIcon />
          </Link>
          <Link
            href='mailto:sofia_soromenho@hotmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='about_social_icon'
          >
            <Mail />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
