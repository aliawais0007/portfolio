import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import StorageIcon from '@material-ui/icons/Storage';
import CloseIcon from '@material-ui/icons/Close';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import sassStyles from '../../styles/Home.module.scss';
import { useState } from "react";
import { imagePath, menu, name } from "../../contants";

const useStyles = makeStyles({
    root: {
        width: "max-content"
    },
    list: {
        width: 300,
        height: "100%",
        color: "#f2f2f2",
        background: "#040b14",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        zIndex: 1302

    },
    icons: {
        color: "#fff"
    }
});

const styles = {
    navLogo: {
        height: 120,
        width: 120,
        borderRadius: "50%",
        border: "10px solid rgba(255, 255, 255 ,0.1)"
    },
    listWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    iconColor: {
        color: "#fff"
    },
    link: {
        cursor: "pointer",
        "&:hover": {
            opacity: 0.7
        }
    }
}



const DrawerMenu = (props) => {

    const classes = useStyles();
    const logo = [<HomeIcon style={styles.iconColor} key={1} />, <InfoIcon style={styles.iconColor} key={2} />, <FileCopyIcon style={styles.iconColor} key={3} />, <LibraryBooksIcon style={styles.iconColor} key={4} />, <StorageIcon style={styles.iconColor} key={5} />, <PermContactCalendarIcon style={styles.iconColor} key={6} />];
    return (
        <div className={classes.list}>
            <CloseIcon style={styles.iconColor} className={sassStyles.closeicon} onClick={() => props.setDrawerStatus(false)} />
            <Avatar src={imagePath + "ali-awais.png"} style={styles.navLogo} />
            <h2 className={sassStyles.title}>
                {name}
            </h2>
            <div style={styles.listWrapper}>
                {menu.map((text, index) =>
                    <div key={index}>
                        <a key={index} href={"#" + text.toLowerCase()} >
                            <List key={index} style={styles.link}>
                                <ListItem className={sassStyles.linkhover}>
                                    <ListItemIcon>
                                        {logo[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </List>
                        </a>
                        <Divider />
                    </div>
                )
                }
            </div>
        </div>
    );
}


export default function Header(props) {
    const classes = useStyles();
    const [isOpened, toggleDrawer] = useState(props.isOpened);
    useEffect(() => {
        toggleDrawer(props.isOpened);
    }, [props.isOpened]);
    return (
        <>
            <SwipeableDrawer className={classes.root} anchor={"left"} onClose={() => { props.setDrawerStatus(false) }} open={isOpened}>
                <DrawerMenu setDrawerStatus={props.setDrawerStatus} />
            </SwipeableDrawer>
        </>
    );
}