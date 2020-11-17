import React from 'react'
import { useState, useEffect } from 'react'

 const list = [
    {name:'pizda materina', id:1},
    {name:'bla bla', id:2},
    {name:'pizda', id:3},
    {name:'materina', id:4},
    {name:'jedi govna', id:5},
    {name:'maslacak', id:6},
];

 export function SubjectsList() {
    const [subjects, setSubjects] = useState([])
    const [selectedSubject,setSelectedSubject] = useState(0)
    const [mySubjects, setMySubjects] = useState([])

    useEffect(() => {
        setSubjects(list)
    }, [])
    
    const onClickSubject = (e)=>{
        if(selectedSubject == 0 || selectedSubject != e.target.id)
        setSelectedSubject(e.target.id)
        console.log(selectedSubject);
    }

    const onAddSubject = () =>{
        const newSubject = subjects.find(subject => subject.id == selectedSubject);
        
       if(mySubjects.length==0){
           const myNewSubjects= mySubjects.push(newSubject)
           setMySubjects(myNewSubjects)
           console.log(mySubjects);
       }
       else{
           if(!(mySubjects.includes(newSubject))){
            const myNewSubjects= mySubjects.push(newSubject)
            setMySubjects(myNewSubjects)
           }
       }
    }
    const listMySubjects = ()=>{
    
             if(!mySubjects.length===0){
            mySubjects.map(s=> {
                return <h1 key={s.id}>{s.name}</h1>
            })
        }
       
    }

    return (

        <div style={{display:'flex', height:'100vh', justifyContent:'flex-start'}}>
            <div style={{ width:'50%', padding:20, height:'100%' }}>
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
                  {listMySubjects}
                
                </div>

            </div>

            
        </div>
      
    )
}

