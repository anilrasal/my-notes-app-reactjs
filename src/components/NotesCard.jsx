import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { Avatar, IconButton, styled, Tooltip, Typography } from '@mui/material';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import { blue, green, pink, yellow } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';


const MyAvatar = styled(Avatar)( ({note})=>({
    backgroundColor: myColor(note)
    }
));

const myColor = (note)=>{
    if(note.category==="work"){
        return yellow[700];
    }
    if(note.category==="todos"){
        return blue[500];
    }
    if(note.category==="reminders"){
        return green[500];
    }
   return pink[600];
}
const NotesCard = ({note,handleDelete})=>{

    const navigate = useNavigate();

    const handleEdit = (noteId)=>{
        navigate(`/edit/${noteId}`);
    }
    return(
        <div>
            <Card elevation={1}>
            <CardHeader
                avatar={
                    <MyAvatar note={note}>
                        {note.category[0].toUpperCase()}
                    </MyAvatar>
                }
                action={
                    <>
                        <Tooltip title="Edit">
                        <IconButton onClick={()=>handleEdit(note.id)}>
                            <EditOutlined color='success'/>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton onClick={()=>handleDelete(note.id)}>
                                <DeleteOutlined color='error'/>
                            </IconButton>
                        </Tooltip>
                    </>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent >
                <Typography variant='body2' color="textSecondary">
                {note.details}
                </Typography>
            </CardContent>
            
            </Card>
        </div>
    )
}

export default NotesCard;