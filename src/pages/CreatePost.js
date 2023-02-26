import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';


const CreatePost = () => {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/post`, {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.status === 200){
            alert('Post Created')
          } else {
            alert('Something went wrong')
          }
    }

    if(redirect){
        return <Navigate to={'/'} />
    }

  return (
    <div className='mx-10 mt-24 min-h-full items-center justify-center'>
        <h2 className='text-xl font-bold text-center'>Create Post</h2>
    <form onSubmit={createNewPost}>
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
        {/* <ReactQuill 
            modules={modules}
            formats={formats}
            value={content}
            onChange={newValue => setContent(newValue)}
        /> */}
        <Editor onChange={setContent} value={content} />
        <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-4">
            Publish
        </button>
    </form>
    </div>
  );
}

export default CreatePost;
