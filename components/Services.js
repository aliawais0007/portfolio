import sassStyles from "../styles/Home.module.scss";
import { faFill, faSearch, faObjectGroup, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Services = () => {
    return (
        <section className={sassStyles.wrapperSection} id="services" style={{ background: "rgb(245, 248, 253)" }}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12 mb-5"}>
                        <h2 className={sassStyles.sectionTitle}>
                            Services
                        </h2>
                        <p className={sassStyles.parahgraph}>
                            Here are some of the services which i offer.
                        </p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-lg-6 col-xl-3 mb-3 mb-xl-0"}>
                        <div className={sassStyles.card}>
                            <div className={sassStyles.iconWrapper}>
                                <FontAwesomeIcon icon={faDesktop} />
                            </div>
                            <h3>
                                Web Development
                            </h3>
                            <p>
                                Fast and High Standard Web applications
                            </p>
                        </div>
                    </div>
                    <div className={"col-lg-6 col-xl-3 mb-3 mb-xl-0"}>
                        <div className={sassStyles.card}>
                            <div className={sassStyles.iconWrapper}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <h3>
                                SEO
                            </h3>
                            <p>
                                Solid tested techniques for high rank on search engines
                            </p>
                        </div>
                    </div>
                    <div className={"col-lg-6 col-xl-3 mb-3 mb-xl-0"}>
                        <div className={sassStyles.card}>
                            <div className={sassStyles.iconWrapper}>
                                <FontAwesomeIcon icon={faObjectGroup} />
                            </div>
                            <h3>
                                UI/UX
                            </h3>
                            <p>
                                Pixel Perfect design while considering useability
                            </p>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-xl-3 mb-3 mb-xl-0"}>
                        <div className={sassStyles.card}>
                            <div className={sassStyles.iconWrapper}>
                                <FontAwesomeIcon icon={faObjectGroup} />
                            </div>
                            <h3>
                                API Integration
                            </h3>
                            <p>
                                Rapid API integartion for complex data
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}