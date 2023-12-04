"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button } from '@radix-ui/themes';

const newIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root> {/* component pulled from radix-ui */}
            <TextField.Input placeholder="Title" />
        </TextField.Root>
        <SimpleMDE placeholder="Description" />
        <Button>Submit Issue</Button>
    </div>
  )
}

export default newIssuePage