import Text from "@material-ui/core"
import { imagePath, tagLine, name, title } from "../contants";
import sassStyles from '../styles/Home.module.scss';
import { useEffect, useState } from "react";
import Typed from 'react-typed';
import Image from "next/image";


export const MainHeader = () => {
    const [myTitle, setTagLine] = useState(title);
    const [index, setIndex] = useState(0);
    return (
        <section className={sassStyles.containerWrapepr}>
            <div className={sassStyles.overlay} />
            <Image src={imagePath + "hero-bg.jpg"} className={sassStyles.fixed_bg} />
            <div className={sassStyles.headerText}>
                <div>
                    <h1 className={sassStyles.name}>{name}</h1>
                    <h2 className={sassStyles.tagline} >
                        {tagLine + " "}
                        <span>
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