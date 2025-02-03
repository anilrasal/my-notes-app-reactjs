import { useEffect, useState } from 'react';
import axios from 'axios';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';
import NotesCard from '../components/NotesCard';

const Notes = ()=>{

    const [notes, setNotes] = useState([]);

    useEffect(()=>{
       axios.get("http://localhost:8000/notes").then(
            (res)=>{
                setNotes(res.data);
            }
        );
        
    },[]);
    
    const handleDelete = async(id)=>{
        const confirm = window.confirm("Are you sure you want to delete?");
        if(confirm){
            await axios.delete("http://localhost:8000/notes/"+id);
            const newNotes = notes.filter(note=>note.id !== id);
            setNotes(newNotes);
        }
    }

    return(
        <Container>
           {/* <Grid container spacing={2}>
            <Grid size={{xs:12,sm:6,md:3}}>
                <Paper>1</Paper>
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}>
                <Paper>2</Paper>
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}>
                <Paper>3</Paper>
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}>
                <Paper>4</Paper>
            </Grid>
           </Grid> */}
           <Grid container spacing={2}>
            {notes.map((note)=>(
                <Grid
                key={note.id}
                size={{xs:12,sm:8,md:6,lg:4}}
                >
                    {/* <Paper>
                    {note.title}
                    </Paper> */}
                    <NotesCard note = {note} handleDelete={handleDelete}/>
                
                </Grid>
            ))}
            </Grid>
            
        </Container>
    )
}

export default Notes;