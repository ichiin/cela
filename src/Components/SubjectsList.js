import React from 'react'
import {useState, useEffect} from 'react'
import '../Style/SubjectsList.css'

const axios = require('axios');

export function SubjectsList() {
    const [subjects, setSubjects] = useState([])
    const [selectedSubjectId, setSelectedSubjectId] = useState(0) //for now, it's only possible to add item 1 by 1
    const [mySubjects, setMySubjects] = useState([])
    const databaseURL = "http://localhost:3001"

    //On page load, upload list of subject from db
    useEffect(() => {
        axios.get(databaseURL + "/getSubjectList")
            .then(function (response) {
                setSubjects(response.data)
            })
            .catch(function (error) {
                console.log("error", error);
            })
    }, [])

    //Select the subject that has been clicked in the list if it's not the selected one
    const onClickSubject = (e) => {
        if (selectedSubjectId === 0 || selectedSubjectId !== e.target.id) {
            setSelectedSubjectId(parseInt(e.target.id))
        }
        console.log("selected subject id : ", e.target.id)
    }

    //Add selected subject to the basket
    const onAddSubject = () => {
        console.log(selectedSubjectId)
        const newSubject = subjects.find(subject => {
            return subject.id === selectedSubjectId
        })
        console.log(newSubject)
        if (!mySubjects.includes(newSubject)) {
            const myNewSubjects = [...mySubjects, newSubject]
            setMySubjects(myNewSubjects);
        }
    }

    return (
        <div id={"subjectsContainer"}>
            <div className={"subjectsListTable"}>
                <h1>Available courses</h1>
                <div className={"subjectsListBody"}>
                    {subjects.map(s => {
                        return <button onClick={onClickSubject} id={s.id} key={"allSubjects" + s.id} className={"subjectTitle"}>{s.name}</button>
                    })
                    }
                </div>
                <button onClick={onAddSubject}>Add course</button>
            </div>
            <div className={"subjectsListTable"}>
                <h1>My courses</h1>
                <div className={"subjectsListBody"}>
                    {mySubjects.map(s => {
                        return <p className={"subjectTitle"} key={"mySubjects" + s.id}>{s.name}</p>
                    })
                    }
                </div>
            </div>
        </div>
    )
}


