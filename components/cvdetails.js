import sassStyles from "../styles/Home.module.scss";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalDetails1, personalDetails2 } from "../contants";
import Avatar from "@material-ui/core/Avatar";


const ListItem = (props) => {
    return (
        <ul className={sassStyles.personalDetailUl}>
            {
                props.array?.map((item, i) => {
                    return <li key={i}>
                        <FontAwesomeIcon icon={faChevronRight} />
                        <span>{item.key + ":   "}</span>
                        {item.value}
                    </li>
                })
            }
        </ul>
    );
}

export const CvDetails = () => {
    return (
        <section className={sassStyles.wrapperSection} id="about">
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2 className={sassStyles.sectionTitle}>
                            About
                    </h2>
                        <p className={sassStyles.parahgraph}>
                            Multi skilled Front-End Developer with over Four years of Experience who adores problem solving. Web is my passion. All technologies that step in daily in our lives in the web industry makes it so hard to keep up, but this is the point that make it so energizing and kicking me up to be up to date, observing, learning and doing wonderful stuff every day, that’s why I’m in love with my work and committed to it.
                    </p>
                    </div>
                </div>

                <div className={"row mt-4 justify-content-center"}>
                    <div className={"col-10 col-md-4"}>
                        <Avatar src={"/assets/images/ali-awais.png"} className={sassStyles.cvPic} />

                    </div>
                    <div className={"col-12 col-md-8"}>
                        <h2 className={sassStyles.sectionTitle + " " + sassStyles.sectionTitleAfter}>
                            Frontend Developer
                        </h2>
                        <p>
                            Delivered impact creating web applications using JavaScript and modern technologies.
                        </p>

                        <div className={"row"}>
                            <div className={"col-6"}>
                                <ListItem array={personalDetails1} ulClass={"personalDetailUl"} />
                            </div>
                            <div className={"col-6"}>
                                <ListItem array={personalDetails2} ulClass={"personalDetailUl"} />
                            </div>
                        </div>
                        <p>
                            Worked in both individual and team environments. Accomplish the frontend of many applications from scratch and assist fellow developers to d efine API’s and database for applications. Effectuate user friendly applications and got 100% satisfactory feedback from clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}