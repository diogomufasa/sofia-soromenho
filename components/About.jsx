// // ABOUT (Profile Card)

import { motion } from "framer-motion";
import { InstagramIcon, FacebookIcon, LinkedinIcon, Mail  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {

    return (
        <section className="about_container">
            <Image src="/assets/images/test1.jpg" alt="Sofia Soromenho" width={500} height={1100} className="about_img" />
            <div className="about_info">
                <h2 className="about_title">Sofia Soromenho</h2>
                <p className="about_desc">Dancer Teacher Writer Choreogropher Phd </p>
                <p className="about_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam suscipit vel ratione, amet beatae enim provident cum delectus obcaecati veritatis deleniti quo sunt quidem nostrum recusandae. Labore dolor officiis illum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae culpa exercitationem laboriosam a cupiditate fugiat facere quia, consequuntur dignissimos totam perspiciatis recusandae distinctio laborum doloribus, necessitatibus odit dolore maxime!</p>

                <div className="about_social">
                    <Link href="https://www.instagram.com/soromenho.s/" target="_blank" rel="noopener noreferrer" className="about_social_icon"><InstagramIcon /></Link>
                    <Link href="https://www.facebook.com/soromenho.s" target="_blank" rel="noopener noreferrer" className="about_social_icon"><FacebookIcon /></Link>
                    <Link href="https://www.linkedin.com/in/sofia-soromenho-9b0b0b1b/" target="_blank" rel="noopener noreferrer" className="about_social_icon"><LinkedinIcon /></Link>
                    <Link href="mailto:sofia_soromenho@hotmail.com" target="_blank" rel="noopener noreferrer" className="about_social_icon"><Mail /></Link>
                </div>
            </div> 


            </section>

    )
}

export default About;