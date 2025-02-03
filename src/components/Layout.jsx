import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {format} from 'date-fns';
import Avatar from "@mui/material/Avatar";


const drawerWidth = 220;
//Styling- start
const SpaceDiv = styled('div')(({theme})=>
    theme.mixins.toolbar
);

const MyPage = styled('div')(({theme})=>({
    backgroundColor:blue[50],
    width:'100%',
    padding: theme.spacing(3)
}));

const Heading = styled(Typography)(({theme})=>({
    padding:theme.spacing(2)
}))

const MyAppbar = styled(AppBar)({
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: "white",
    color:"inherit",
});

const MyAvatar = styled(Avatar)(({theme})=>({
    marginLeft: theme.spacing(2)
}));

const Root = styled('div')(({theme})=>({
    display:"flex",
    
}));

const MyDrawer = styled(Drawer)({
    width:drawerWidth,
    '& .MuiDrawer-paper':{
                        width:drawerWidth
                    }

});

//styling-ends

const Layout = ({children})=>{
    const navigate = useNavigate();
    const location = useLocation();

    //List items to show on the side drawer
    const menuItem = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color= "secondary"/>,
            path:"/"
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color="secondary"/>,
            path:"/create"
        },

    ];

    return(
        <Root>
            
            {/* app bar */}
            <MyAppbar
                elevation={1}
            >
                <Toolbar>
                    <Typography flexGrow='1'>
                    Today is the {
                       //Date().toString()
                       
                       format(new Date(), 'do MMMM y')
                       }
                    </Typography>
                    <Typography>
                        Spiderman
                    </Typography>
                    <MyAvatar src="/spider.png"/>
                    
                </Toolbar>
            </MyAppbar>
            {/* Side bar */}
            <MyDrawer 
                variant="permanent"
                anchor="left"
                sx={{    
                }}
            >
                <div>
                    <Heading variant="h6">
                        My Notes
                    </Heading>
                </div>
                <List>
                    {menuItem.map(item=>(
                        <ListItem 
                            disablePadding
                            key={item.text}
                            data-active = {location.pathname === item.path ? "":null}
                            sx={{
                                '&[data-active]':{
                                    backgroundColor:grey[200]
                                }
                            }}
                        >
                        <ListItemButton on onClick={()=>{
                            navigate(item.path);
                            }
                            }>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </MyDrawer>
            <MyPage>
                <SpaceDiv></SpaceDiv>
                {children}
                
            </MyPage>
        </Root>
    )
}

export default Layout;