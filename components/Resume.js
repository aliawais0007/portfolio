import sassStyles from "../styles/Home.module.scss";
import { skills } from "../contants";

export const Resume = () => {
    return (
        <section className={sassStyles.wrapperSection} id="resume">
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12 mb-5"}>
                        <h2 className={sassStyles.sectionTitle}>
                            Resume
                        </h2>
                        <p className={sassStyles.parahgraph}>
                            My professional experience includes bringing the wireframes of the UX designer to life through HTML5 and CSS3, as well as collaborating with Back End Developers to create a stellar finished product. I think my skills and experience makes me a great fit for your company.
                        </p>
                    </div>
                    <div className={"col-lg-6"}>
                        <h2 className={sassStyles.h2Title}>
                            Sumary
                        </h2>
                        <div className={sassStyles.resumeSection}>
                            <h3 className={sassStyles.h3Title}>
                                Ali Awais
                            </h3>
                            <p>
                                <em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em>
                            </p>
                            <ul>
                                <li>
                                    Business Bay, Dubai, UAE
                                </li>
                                <li>
                                    +971 58 197 2786
                                </li>
                                <li>
                                    ali.awais5044@gmail.com
                                </li>
                            </ul>

                        </div>
                        <h2 className={sassStyles.h2Title}>
                            Education
                            </h2>
                        <div className={sassStyles.resumeSection}>
                            <h3 className={sassStyles.h3Title}>
                                Bachelor In Information Technology
                            </h3>
                            <h5 className={sassStyles.year}>
                                2014 - 2018
                            </h5>

                            <p>
                                <em>
                                    Univeristy of Gujrat, Punjab, Pakistan
                                </em>
                            </p>
                            <p>
                                I have Information technology degree with web development as major.
                            </p>

                        </div>

                        <h2 className={sassStyles.h2Title}>
                            Experience
                        </h2>
                        <div className={sassStyles.resumeSection}>
                            <h3 className={sassStyles.h3Title}>
                                Front End Developer
                            </h3>
                            <h5 className={sassStyles.year}>
                                June 2020 — Present
                            </h5>
                            <p>
                                <em>
                                    MultiBank Group, Dubai, UAE
                                </em>
                            </p>
                            <ul>
                                <li>
                                    Developing new user-facing app using React and other modern libraries.
                                </li>
                                <li>
                                    Implemented SEO techniques to rank high apps on Google and other search engines.
                                </li>
                                <li>
                                    Turning wireframes to pixel perfect designs.
                                </li>
                                <li>
                                    Making Responsive design by doing compatibility testing across all devices and platforms.
                                </li>
                                <li>Integrating API’S using axios and fetch.</li>
                                <li>Creating Landing pages and forms for Forex customer registration.</li>
                                <li>Created more than 14 language translations in website.</li>
                                <li>Working on GitLab and following deployment process using CI/CD pipelines.</li>
                                <li>Assisting backend-dev team to accomplish the end product.</li>
                            </ul>

                        </div>

                    </div>
                    <div className={"col-lg-6"}>


                        <h2 className={sassStyles.h2Title}>
                            Experience
                        </h2>

                        <div className={sassStyles.resumeSection}>
                            <h3 className={sassStyles.h3Title}>
                                Web Developer
                            </h3>
                            <h5 className={sassStyles.year}>
                                Feb 2020 — June 2020 (Contract)
                            </h5>
                            <p>
                                <em>
                                    Inox Arbia, Al Qouz, Dubai
                                </em>
                            </p>
                            <ul>
                                <li>
                                    Developing new user-facing app using VUE.JS and Blade.
                                </li>
                                <li>
                                    API integration for multiple modules.
                                </li>
                                <li>
                                    Design ideas and Time Estimation.
                                </li>
                                <li>
                                    Usibility and Design Testing.
                                </li>
                            </ul>

                        </div>

                        <div className={sassStyles.resumeSection}>
                            <h3 className={sassStyles.h3Title}>
                                Web Developer (MERN Stack)
                            </h3>
                            <h5 className={sassStyles.year}>
                                April 2018 — February 2020
                            </h5>
                            <p>
                                <em>
                                    Approcket, Lahore, Pakistan
                                </em>
                            </p>
                            <ul>
                                <li>
                                    Developing new user-facing app using React js and Material UI.
                                </li>
                                <li>
                                    Considered UX practice’s while designing the Interfaces of applications.
                                </li>
                                <li>
                                    Implemented SEO techniques to rank high apps on Google and other search engines.
                                </li>
                                <li>
                                    Translating designs and wireframes into responsive and high quality code using Styled Components
                                </li>
                                <li>
                                    Optimizing components for maximum performance across a vast array of web-capable Devices and Browsers
                                </li>
                                <li>
                                    Developing API’s using Django framework
                                </li>
                                <li>
                                    Worked as Integration Engineer and handled complete integration process and UI designing of COLABS (Co-working space in Pakistan) customer-portal.
                                </li>
                            </ul>

                        </div>

                        <div className={sassStyles.resumeSection}>
                            <h3 className={sassStyles.h3Title}>
                                Front End Developer (Internship)
                            </h3>
                            <h5 className={sassStyles.year}>
                                January 2018 — March 2018
                            </h5>
                            <p>
                                <em>
                                    Nexthon, Gujrat, Pakistan
                                </em>
                            </p>
                            <ul>
                                <li>
                                    Front End Development based on HTML, HTML5, CSS / CSS3 and jQuery, JavaScrip
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}