"use client";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout } from '@radix-ui/themes';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
    title: String;
    description: String;
}

const newIssuePage = () => {
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<IssueForm>();
    const [ error, setError ] = useState('');

  return (
    <div className="max-w-xl">
        {error && <Callout.Root color='red' className="mb-5">
            <Callout.Text>{error}</Callout.Text>    
        </Callout.Root>}
        <form 
        className='space-y-3'
        onSubmit={handleSubmit(async (data) => { 
            try {
                await axios.post('/api/issues', data); router.push('/issues');
            } catch (error) {
                setError('An unexpected error has occurred.');
            }
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
    </div>
  )
}

export default newIssuePage