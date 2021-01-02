import React from 'react'
import { useState, useEffect } from 'react'
import{Link} from 'react-router-dom'
const axios = require('axios');


 export function SubjectsList(props) {
    const personalInfo = props.location.state
    const [subjects, setSubjects] = useState([])
    const [selectedSubject,setSelectedSubject] = useState(0)
    const [selectedMySubject,setSelectedMySubject] = useState(0)
    const [mySubjects, setMySubjects] = useState([])

     useEffect(() => {
        console.log(personalInfo);
         axios.get("http://localhost:3001/getSubjectList")
             .then(function (response) {
                 console.log("res response : ", response);
                 setSubjects(response.data)
             })
             .catch(function (error) {
                 // handle error
                 console.log("error", error);
             })
         console.log(mySubjects)

     }, [])
    
    const onClickSubject = (e)=>{
        if(selectedSubject === 0 || selectedSubject !== e.target.id){
          setSelectedSubject(e.target.id)  
        }
        
    }
    const onClickMySubject = (e)=>{
        if(selectedMySubject === 0 || selectedMySubject !== e.target.id){
          setSelectedMySubject(e.target.id)  
        }
        
    }

    const onAddSubject = () =>{
        const newSubject = subjects.find(subject => subject.id == selectedSubject);
        if(!mySubjects.includes(newSubject)){
            const myNewSubjects= [...mySubjects,newSubject]
           setMySubjects(myNewSubjects);

        }
    }
    
    const onRemoveSubject =() =>{
        const newSubject = mySubjects.find(subject => subject.id == selectedMySubject);
        if(mySubjects.includes(newSubject)){
            const myNewSubjects= mySubjects.filter(subject => subject.id!= selectedMySubject)
           setMySubjects(myNewSubjects);

        }

    }
             
           
        
       
    

    return (
        <div>
        <div style={{display:'flex', height:'100vh', justifyContent:'flex-start'}}>
            <div style={{ width:'65%', padding:20, height:'100%', textAlign:'center' }}>
                    <h1>Courses</h1>
                    <div style={{height:'70%', borderStyle:'solid', borderWidth:'1px', borderColor:'black'}}>
                        {subjects.map(s=>{
                            return <button onClick={onClickSubject} id={s.id} key={s.id} style = {{backgroundColor:'transparent', borderColor:'transparent',width:'100%'}} >{s.name}</button>})}
                    </div>
                    <button onClick = {onAddSubject} >add subject</button>
                

            </div>
            <div style={{ width:'35%', padding:20, height:'100%' }}>
                <h1>My courses</h1>
                <div style={{height:'70%', borderStyle:'solid', borderWidth:'1px', borderColor:'black'}}>
                  { mySubjects.map(s=> {
                return <button  onClick={onClickMySubject} id={s.id}  style = {{backgroundColor:'transparent', borderColor:'transparent',width:'100%'}} key={s.id}>{s.name}</button>
            })}
                </div>
                <button onClick = {onRemoveSubject} >Remove subject</button>

            </div>

        </div>
        <Link to={{pathname:'/LaAgreement', state: {mySubjects:mySubjects, personalInfo:personalInfo}}}>Generate LA</Link>
      </div>
    )
}


