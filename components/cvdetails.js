import sassStyles from "../styles/Home.module.scss";
import Image from "next/image";
import { imagePath, menu, name } from "../contants";

export const CvDetails = () => {
    return (
        <section className={sassStyles.wrapperSection}>
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
                    <div className={"col-10 col-md-3"}>
                        <Image src={"/assets/images/ali-awais.png"} title="ali awais" alt="ali awais" width="300" height="300" className={sassStyles.cvPic} />
                    </div>
                    <div className={"col-12 col-md-9"}>
                        <h2 className={sassStyles.sectionTitle + " " + sassStyles.sectionTitleAfter}>
                            Frontend Developer
                        </h2>
                        <p>
                            Delivered impact creating web applications using JavaScript and modern technologies. Worked in both individual and team environments. Accomplish the frontend of many applications from scratch and assist fellow developers to d efine API’s and database for applications. Effectuate user friendly applications and got 100% satisfactory feedback from clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}