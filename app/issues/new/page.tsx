"use client";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import "easymde/dist/easymde.min.css";
import { TextField, Button } from '@radix-ui/themes';
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
    title: String;
    description: String;
}

const newIssuePage = () => {
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <form 
    className='max-w-xl space-y-3'
    onSubmit={handleSubmit(async (data) => { await axios.post('/api/issues', data); router.push('/issues');
    })}>
        <TextField.Root> {/* component pulled from radix-ui */}
            <TextField.Input placeholder="Title" {...register('title')} />
        </TextField.Root>
        <Controller 
            name='description'
            control={control}
            render={({ field }) => <SimpleMDE placeholder="Description" {...field}/>}
        />
        <Button>Submit Issue</Button>
    </form>
  )
}

export default newIssuePage