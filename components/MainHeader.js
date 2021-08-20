import { tagLine, name, title } from "../contants";
import sassStyles from '../styles/Home.module.scss';
import { useEffect, useState, useRef } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Typed from 'react-typed';
import Button from '@material-ui/core/Button';


export const MainHeader = (props) => {
    const handleClick = () => {
        props.setDrawerStatus(!props.isOpened);
    }
    return (
        <section className={sassStyles.containerWrapepr} id="home">
            <div className={sassStyles.overlay} />
            <div className={sassStyles.fixed_bg} />
            <div className={sassStyles.headerText}>
                <div>
                    <MenuIcon className={sassStyles.menuIcon} onClick={() => handleClick()} style={{ color: props.menuColor }} />
                    <div style={{ display: "none", position: "fixed", top: "20px", right: "60px" }}>
                        <Button className={sassStyles.buttonDownload} variant="contained" color="primary" href="../assets/pdf/ali-awais-cv.pdf">
                            Curriculum Vitae
                        </Button>
                        <Button className={sassStyles.buttonDownload} variant="contained" color="primary" href="../assets/pdf/ali-awais-cv.pdf" >
                            Cover Letter
                        </Button>
                    </div>
                    <h1 className={sassStyles.name}>{name}</h1>
                    <h2 className={sassStyles.tagline} >
                        {tagLine + " "}
                        <span className={sassStyles.underline}>
                            <Typed
                                strings={[title]}
                                typeSpeed={40}
                                loop={true}
                            />
                        </span>
                    </h2>
                </div>
            </div>
        </section >
    );
}
