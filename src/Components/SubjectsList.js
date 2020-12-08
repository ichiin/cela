import React from 'react'
import { useState, useEffect } from 'react'
const axios = require('axios');

 export function SubjectsList() {
    const [subjects, setSubjects] = useState([])
    const [selectedSubject,setSelectedSubject] = useState(0)
    const [mySubjects, setMySubjects] = useState([])

     useEffect(() => {
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

    const onAddSubject = () =>{
        const newSubject = subjects.find(subject => subject.id == selectedSubject);
        if(!mySubjects.includes(newSubject)){
            const myNewSubjects= [...mySubjects,newSubject]
           setMySubjects(myNewSubjects);

        }
    }
             
           
        
       
    

    return (

        <div style={{display:'flex', height:'100vh', justifyContent:'flex-start'}}>
            <div style={{ width:'50%', padding:20, height:'100%', textAlign:'center' }}>
                    <h1>List of all subjects</h1>
                    <div style={{height:'80%', borderStyle:'solid', borderWidth:'1px', borderColor:'black'}}>
                        {subjects.map(s=>{
                            return <button onClick={onClickSubject} id={s.id} style = {{backgroundColor:'transparent', borderColor:'transparent',width:'100%'}} >{s.name}</button>})}
                    </div>
                    <button onClick = {onAddSubject} >add subject</button>
                

            </div>
            <div style={{ width:'50%', padding:20, height:'100%' }}>
                <h1>selected subjects</h1>
                <div style={{height:'80%', borderStyle:'solid', borderWidth:'1px', borderColor:'black'}}>
                  { mySubjects.map(s=> {
                return <li style={{fontSize:'2rem', color:'blue', width:'100%',listStyle:'none'}} key={s.id}>{s.name}</li>
            })}
                
                </div>

            </div>

            
        </div>
      
    )
}


