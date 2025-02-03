import Button  from "@mui/material/Button";
import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";
import React from "react";

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from "react";
import { FormControlLabel, Radio, RadioGroup, Stack, styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { blue } from "@mui/material/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = ()=>{

    // const [title, setTitle] = useState("");
    // const [details, setDetails] = useState("");
    //const [category, setCategory] = useState("todos");
    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);
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
       setErrors({
        ...errors, [name]:false
       })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newErrors = {
            title:inputValues.title==='',
            details:inputValues.details===''
        };
        setErrors(newErrors);

        if(inputValues.title&&inputValues.details&&inputValues.category){
            axios.post("http://localhost:8000/notes", inputValues, {headers:{
                "Content-type":"application/json"
            }}).then(
                navigate("/")
            );
        }
        
    }
    
    const MyRadio = styled(Radio)({
        '&.Mui-checked':{
            color:blue[600]
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
            Create a new note
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
                    error={errors.title}
                    name="title"
                    label="Title"
                    color="secondary"
                    variant="outlined"
                    helperText={errors.title?"Title is required":""}
                    value={inputValues.title}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField 
                    value={inputValues.details}
                    name="details"
                    error={errors.details}
                    helperText={errors.details ?"Details are required":''}
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
                >Add note</Button>
            </form>

            
    
            </Container>
        </div>
    )
}

export default Create;