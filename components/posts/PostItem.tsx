import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Avatar from "../Avatar";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import useLike from "@/hooks/useLike";

interface PostItemProps {
    data: Record<string, any>;
    userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {

    const router = useRouter();
    const loginModal = useLoginModal();

    const { data: currentUser } = useCurrentUser();
    const { hasLiked, toggleLike } = useLike({ postId : data.id, userId });

    const goToUser = useCallback((ev: any) => {
        ev.stopPropagation();
        router.push(`/users/${data.user.id}`)
      }, [router, data.user.id]);
    

    const goToPost = useCallback(() => {
        router.push(`/posts/${data.id}`);
    }, [router, data.id]);

    const onLike = useCallback(async (ev: any) => {
        ev.stopPropagation();
    
        if (!currentUser) {
          return loginModal.onOpen();
        }
    
        toggleLike();
      }, [loginModal, currentUser, toggleLike]);
    

    const createdAt = useMemo(() => {
        if(!data?.createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt]);

    const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;


  return (
    <div 
    onClick={goToPost}
    className="
    border-b-[1px]
    border-white
    border-opacity-40
    p-5
    cursor-pointer
    hover:bg-slate
    hover:bg-opacity-40
    transition
    ">
        <div className="flex flex-row items-start gap-3">
            <div className="mt-1">
            <Avatar userId={data.user.id} />
            </div>
            <div>
                <div
                className="flex flex-row item-center gap-2">
                    <p 
                    onClick={goToUser}
                    className="
                    text-whitee
                    font-semibold
                    cursor-pointer
                    hover:underline">{data.user.name}</p>
                    <span 
                    onClick={goToUser}
                    className="
                    text-white
                    cursor-pointer
                    hover:underline
                    hidden
                    md:block">@{data.user.username}</span>
                    <span className="text-white text-sm mt-0.5">{createdAt} ago</span>

                </div>
                <div className="text-whitee mt-1">
                    {data.body}
                </div>
                <div className="flex flex-row items-center mt-2 gap-10">
                    <div className="
                    flex
                    flex-row
                    items-center
                    text-white
                    gap-2
                    cursor-pointer
                    transition
                    hover:text-blue">
                        <AiOutlineMessage size={20}/>
                        <p>
                            {data.comments?.length || 0}
                        </p>

                    </div>

                    <div 
                    onClick={onLike}
                    className="
                    flex
                    flex-row
                    items-center
                    text-white
                    gap-2
                    cursor-pointer
                    transition
                    hover:text-red">
                        <LikeIcon size={20} color={hasLiked ? 'red' : ''}/>
                        <p>
                            {data.likedIds.length}
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default PostItem;