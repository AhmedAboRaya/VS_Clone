import { ChevronsLeftRight } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { RadioTower } from 'lucide-react';
import { Radio } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Spinner } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='flex flex-row justify-between text-zinc-100 items-center text-sm'>
            <div className='flex flex-row space-x-2 items-center'>
                <span className='hover:bg-slate-700 flex flex-row space-x-2 items-center bg-blue-300 w-8 justify-center'>
                    <ChevronsLeftRight  className='size-5 bg-transparent'/>
                </span>
                <span className='flex flex-row space-x-2 items-center hover:bg-slate-700 px-1'>
                    <CircleX className='mr-2 size-4 bg-transparent'/> 0 <TriangleAlert className='size-4 bg-transparent'/> <span className='ml-2 bg-transparent'>0</span>
                </span>
                <span className='flex flex-row items-center hover:bg-slate-700 px-1'>
                    <RadioTower  className='mr-2 size-4 bg-transparent'/> 0
                </span>
            </div>

            <div className='flex flex-row space-x-2 items-center'>
                <span className='flex flex-row space-x-2 items-center hover:bg-slate-700 px-1'>
                    <Radio className='size-4 mr-2 bg-transparent'/> Go Live
                </span>
                <span className='hover:bg-slate-700 px-1'>
                    <Spinner size='sm' className='bg-transparent'/> 
                </span>
                <span className='flex flex-row space-x-2 items-center hover:bg-slate-700 px-1'>
                    <Bell  className='size-4 bg-transparent'/> 0
                </span>
            </div>
        </div>
    )
}

export default Footer