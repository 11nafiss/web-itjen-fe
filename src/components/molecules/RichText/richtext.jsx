import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
  [{ 'font': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }], 
  ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'background': [] }, { 'script': 'sub'}, { 'script': 'super' }, 'clean'],
  [{ 'indent': '+1' }, { 'align': [] }, { 'list': 'ordered'}, { 'list': 'bullet' }], 
  ['image', 'link', 'blockquote', 'code-block', 'video'],
];

export default function MyComponent() {
  const [value, setValue] = useState('');
  const module = {
    toolbar: toolbarOptions
  }
  

  return <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} placeholder='Tulis Artikel Disini..' style={{ height: "200px" }} />;
}