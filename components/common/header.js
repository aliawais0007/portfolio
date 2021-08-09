import { render } from "react-dom";
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import Link from "next/Link";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import StorageIcon from '@material-ui/icons/Storage';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { useState } from "react";

const publicPath = "../../public/assets/"

const useStyles = makeStyles({
    list: {
        width: 300,
        height: "100%",
        color: "#f2f2f2",
        background: "#040b14",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        
    },
    icons:{
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
    iconColor:{
        color: "#fff"
    },
    link: {
        cursor: "pointer",
        "&:hover":{
            opacity: 0.7
        }
    }
}



const DrawerMenu = () => {
    const classes = useStyles();
    const menu = ["HOME", "ABOUT", "RESUME", "PORTFOLIO", "SERVICES", "CONTACT"];
    const logo = [<HomeIcon style={styles.iconColor}/>, <InfoIcon style={styles.iconColor}/>, <FileCopyIcon style={styles.iconColor}/>, <LibraryBooksIcon style={styles.iconColor}/>, <StorageIcon style={styles.iconColor}/>, <PermContactCalendarIcon style={styles.iconColor}/>];
    
    return (
        <div className={classes.list}>
            <Avatar src={"../../assets/images/ali-awais.png"} style={styles.navLogo}/>
            <h2 className={"title"}>
                Ali Awais
            </h2>
            <div style={styles.listWrapper}>
                {menu.map((text, index) =>
                    <Link href={"#"+text.toLowerCase()} >
                        <List key={index} style={styles.link}>
                            <ListItem >
                                <ListItemIcon>
                                    {logo[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </List>
                    </Link>
                )
                }
            </div>
        </div>
    );
}


export default function Header() {
    const [isOpened, toggleDrawer] = useState(false);
    return (
        <>
            <Button onClick={() => isOpened ? toggleDrawer(false) : toggleDrawer(true)}>
                Open Drawer
            </Button>
            <Drawer anchor={"left"} onClose={() => { toggleDrawer(false) }} open={isOpened}>
                <DrawerMenu />
            </Drawer>
        </>
    );
}