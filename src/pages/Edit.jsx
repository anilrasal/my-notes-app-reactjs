import Button  from "@mui/material/Button";
import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from "react";
import { FormControlLabel, Radio, RadioGroup, Stack, styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { purple } from "@mui/material/colors";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ()=>{

    const {id} =useParams();
    // const [title, setTitle] = useState("");
    // const [details, setDetails] = useState("");
    //const [category, setCategory] = useState("todos");
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        title:'',
        details:'',
        category:'todos'
    }
    );

    const handleChange = (e)=>{
       const {name, value} = e.target;
       setInputValues({
        ...inputValues, [name]: value,
       });
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/notes/"+id)
        .then((res)=>{
            setInputValues({
                title: res.data.title,
                details: res.data.details,
                category: res.data.category
            })
        })
    },[id]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValues.title&&inputValues.details&&inputValues.category){
            axios.put(`http://localhost:8000/notes/${id}`, inputValues, {headers:{
                "Content-type":"application/json"
            }}).then(
                navigate("/")
            );
        }
        
    }
    
    const MyRadio = styled(Radio)({
        '&.Mui-checked':{
            color:purple[500]
        }
    })

    // const InputField =  styled(TextField)({
    //     marginTop:20,
    //     marginBottom:20,
    //     display:'block',
      
    // });
    
    
    return(
        <div>
            <Container>
            
            <Typography 
                variant="h6"
                color="textSecondary"
                gutterBottom
            >
            Update the note
            </Typography>
            
            <form 
                noValidate 
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Stack direction="column" spacing={3} sx={
                    {
                        marginBottom:2,
                        marginTop:4}
                    }>
                <TextField 
                    name="title"
                    label="Title"
                    color="secondary"
                    variant="outlined"
                    value={inputValues.title}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField 
                    value={inputValues.details}
                    name="details"
                    onChange={handleChange}
                    label="Details"
                    color="secondary"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                />
                <FormControl color="secondary">
                <FormLabel>Note Category</FormLabel>
                <RadioGroup name="category" value={inputValues.category} onChange={
                    handleChange
                    // (e)=>{
                    // console.log(e.target.value)
                    // setCategory(e.target.value)
                    // }
                    }>
                    <FormControlLabel label="Todos" value="todos" control={<MyRadio/>}/>
                    <FormControlLabel label="Money" value="money" control={<MyRadio/>}/>
                    <FormControlLabel label="Reminders" value="reminders" control={<MyRadio/>}/>
                    <FormControlLabel label="Work" value="work" control={<MyRadio/>}/>
                </RadioGroup>
                </FormControl>
                </Stack>
                <Button 
                    type="submit" 
                    variant="contained"
                    color="secondary"
                    endIcon={<KeyboardArrowRightOutlinedIcon/>}
                >Save</Button>
            </form>

            
    
            </Container>
        </div>
    )
}

export default Edit;