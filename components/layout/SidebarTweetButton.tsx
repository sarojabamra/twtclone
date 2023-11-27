import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FaFeather } from 'react-icons/fa';
import useLoginModal from '@/hooks/useLoginModal';

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    
    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);


    return (
        <div onClick={onClick}>
            <div
            className='
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            bg-gradient-to-r from-dblue to-green
            hover-bg-opacity-50
            transition
            cursor-pointer'>
                <FaFeather size={20} color="white" />
            </div>
            <div className='
                mt-6
                hidden
                lg:block
                px-4
                py-2
                rounded-full
                bg-gradient-to-r from-dblue to-green
            
                hover:bg-opacity-90
                cursor-pointer
                transition
            '>
                <p className='
                hidden
                lg:block
                text-center
                font-semibold
                text-whitee
                text=[20px]'>Tweet</p>

            </div>



        </div>
    );
}

export default SidebarTweetButton;