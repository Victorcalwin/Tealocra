import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import { AllComment } from '../App'

function Firstpage() {

    let context = useContext(AllComment)

    let [post, SetPost] = useState('');

    let addComment = () => {
        let data = {
            post,
        }
        let comment = [...context.comment]
        comment.push(data)
        context.setComment(comment)
    }

    let edit = (i) => {

    }

    let deleteFunc = (i) => {

    }

    return (
        <div>
            <h1>React is not SEO Friendly. so When SEO is need what should i do? without next js</h1>


            <input type="text" placeholder="Type any Comment" onChange={(e) => {
                SetPost(e.target.value)
            }} />
            <Button varient='primary' onClick={() => addComment()}>Add</Button>

            {context.comment.map((e, i) => {
                return <div key={i}>
                    <p>{e.post}</p>
                    {/* <Button varient="primary" onClick={edit(i)}>Edit</Button> */}
                    <Button varient="danger" onClick={deleteFunc(i)}>Delete</Button>
                </div>
            })}
        </div>
    )
}

export default Firstpage