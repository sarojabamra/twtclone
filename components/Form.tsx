import useLoginModal from "@/hooks/useLoginModal";
import useRegister from "@/hooks/useRegister";
import usePosts from "@/hooks/usePosts";
import { useCallback, useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "./Button";
import Avatar from "./Avatar";
import usePost from "@/hooks/usePost";

interface FormProps {
    placeholder: string;
    isComment?: boolean;
    postId?: string;
}

const Form: React.FC<FormProps> = ({
    placeholder,
    isComment,
    postId
}) => {

    const registerModal = useRegister();
    const loginModal = useLoginModal();

    const { data: currentUser } = useCurrentUser();
    const { mutate: mutatePosts } = usePosts();
    const { mutate: mutatePost } = usePost(postId as string);

    const [body, setBody] = useState('');
    const [ isLoading, setIsLoading] = useState(false);
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            const url = isComment ? `/api/comments?postId=${postId}` : '/api/posts';

            await axios.post(url, { body });
            toast.success('Tweet Created');

            setBody('');
            mutatePosts();
            mutatePost();
        } catch (error){
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }

    }, [body, mutatePosts, isComment, postId, mutatePost]);

    return(
        <div className="border-b-[1px] border-white border-opacity-40 px-5 py-2">
            {currentUser ? (
                <div className="flex felx-row gap-4">
                    <div className="mt-2">
                        <Avatar userId={currentUser?.id} />
                    </div> 
                    <div className="w-full">
                        <textarea 
                        disabled={isLoading}
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        className="
                        disabled:opacity-80
                        peer
                        resize-none
                        mt-3
                        w-full
                        bg-darkblue
                        ring-0
                        outline-none
                        text-[18px]
                        placeholder-white
                        text-whitee
                        "
                        placeholder={placeholder}
                        ></textarea>
                        <hr
                        className="
                        opacity-0
                        peer-focus:opacity-100
                        h-[1px]
                        w-full
                        border-white
                        border-opacity-40
                        transition"/>
                        <div className="mt-3.5 mb-2 flex flex-row justify-end">
                            <Button 
                            disabled= {isLoading || !body }
                            onClick={onSubmit}
                            label="Tweet"/>
                        </div>
                    </div>

                </div>
            ) : (
            <div className="py-8">
                <h1 className="
                text-whitee
                text-2xl
                text-center
                mb-4
                font-bold">
                    Welcome To Twitter
                </h1>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Button label="Login" onClick={loginModal.onOpen} />
                    <Button label="Register" onClick={registerModal.onOpen} 
                    />

                </div>

            </div>
            )}

        </div>
        
    )
}

export default Form;