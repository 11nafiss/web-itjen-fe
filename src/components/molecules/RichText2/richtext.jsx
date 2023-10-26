import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

export default function MyComponent() {
  const [content, setContent] = useState('');
  const editor = useRef(null);
  

  return (
    <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} style={{ minHeight: "200px" }} />
  );
}