import { tagLine, name, title } from "../contants";
import sassStyles from '../styles/Home.module.scss';
import { useEffect, useState, useRef } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Typed from 'react-typed';


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