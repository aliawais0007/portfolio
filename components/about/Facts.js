import sassStyles from "../../styles/Home.module.scss";

export const Facts = () => {
    return (
        <section className={sassStyles.wrapperSection} id="facts">
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2 className={sassStyles.sectionTitle}>
                            Facts
                    </h2>
                        <p className={sassStyles.parahgraph}>
                            Allow me to start by introducing myself and talk a bit about why I would be an excellent fit as a Front-End Developer. Majorly I have <b>Four years</b> of experience in Front End Development. During my career I honed my <b>CSS3, Bootstrap, jQuery, JavaScript, React.js, Vue.js,HTML5,</b> and various backed technologies as my secondary role, as well as my knowledge of mobile, User Experience and responsive design.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}