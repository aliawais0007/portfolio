import { PersonalDetails } from "./about/PersonalDetails";
import { Facts } from "./about/Facts";
import { Skills } from "./about/Skills";

export const About = (props) => {
    return (
        <>
            <PersonalDetails setMenuColor={props.setMenuColor} />
            <Facts />
            <Skills />
        </>
    );
}