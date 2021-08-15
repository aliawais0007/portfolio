import sassStyles from "../styles/Home.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { subjectOptions } from "../contants";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: `8px 0px`,
            width: '100%',
        },
    },
}));

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const classes = useStyles();

    const handleChange = (e) => {
        const fieldName = e.target.name;
        switch (fieldName) {
            case "email":
                setEmail(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            case "subject":
                setSubject(e.target.value);
                break;
            case "message":
                setSubject(e.target.value);
                break;
        }
    }
    return (
        <section className={sassStyles.wrapperSection} id="contact" >
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12 mb-5"}>
                        <h2 className={sassStyles.sectionTitle}>
                            Contact
                        </h2>

                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <iframe width="600" height="450" style={{ border: 0, maxWidth: "100%" }} loading="lazy" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRaypYT5pXz4R1SII5ibX6ME&key=AIzaSyDAAM1M5bIManqOD8407kqt40KD_Le-Odo"></iframe>
                    </div>
                    <div className={"col-md-6"}>
                        <form className={sassStyles.form + " " + classes.root}>
                            <TextField label="Name" variant="outlined" />
                            <TextField label="Email" variant="outlined" value={email} onChange={(e) => { handleChange(e) }} />
                            <TextField
                                select
                                label="Subject"
                                value={subject}

                                onChange={(e) => { handleChange(e) }}
                                helperText="Please select subject"
                                variant="outlined"
                            >
                                {subjectOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="outlined-basic" label="Message" variant="outlined" value={message} multiline={true} onChange={(e) => { handleChange(e) }} />
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}