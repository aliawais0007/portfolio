import sassStyles from "../../styles/Home.module.scss";
import { skills } from "../../contants";

const SkillItems = () => {
    return (
        <>
            {skills.map(({ name, percentage }, index) => {

                return <div key={index} className={`col-12 col-md-6 mb-2`}>
                    <div className={"row"}>
                        <div className={"col-12 d-flex justify-content-between"}>
                            <span>{name}</span>
                            <span>{percentage}</span>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <div className={sassStyles.progressWrapper}>
                                <div className={sassStyles.progress} style={{ width: `${percentage}` }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
            }
        </>
    );
}

export const Skills = () => {
    return (
        <section className={sassStyles.wrapperSection} id="facts" style={{ background: "rgb(245, 248, 253)" }}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12 mb-5"}>
                        <h2 className={sassStyles.sectionTitle}>
                            Skills
                        </h2>
                        <p className={sassStyles.parahgraph}>
                            My professional experience includes bringing the wireframes of the UX designer to life through HTML5 and CSS3, as well as collaborating with Back End Developers to create a stellar finished product. I think my skills and experience makes me a great fit for your company.
                        </p>
                    </div>
                    <SkillItems />

                </div>
            </div>
        </section>
    );
}