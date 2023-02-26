import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';

const EditPost = () => {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/post/`+id)
        .then(response =>{
            response.json().then(postInfo => {
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setSummary(postInfo.summary);
            });
        });
    },);

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if(files?.[0]) {
            data.set('file', files?.[0]);
        }
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/post`, {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        setRedirect(true);
    }

    if(redirect){
        return <Navigate to={'/post/'+id} />
    }

return (
    <div className='mx-10 mt-24 min-h-full items-center justify-center'>
        <h2 className='text-xl font-bold text-center'>Update Post</h2>
    <form onSubmit={updatePost}>
        <input 
            className='w-full border rounded p-1' 
            type='title' 
            placeholder={'Title'}
            value={title}
            onChange={ev => setTitle(ev.target.value)}
        />
        <input 
            className='w-full border rounded p-1 mt-2' 
            type='summary'
            placeholder={'Summary'}
            value={summary}
            onChange={ev => setSummary(ev.target.value)}
        />
        <input 
            className='w-full border rounded p-1 mt-2' 
            type='file'
            onChange={ev => setFiles(ev.target.files)}
        />
        <Editor onChange={setContent} value={content} />
        <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-4">
            Update Post
        </button>
    </form>
    </div>
);
}

export default EditPost
