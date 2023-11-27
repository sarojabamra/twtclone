import { useMemo } from "react";
import { BiCalendar } from "react-icons/bi";
import { format } from "date-fns";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useFollow from "@/hooks/useFollow";
import useEditModal from "@/hooks/useEditModal";

import Button from "../Button";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');
  }, [fetchedUser?.createdAt])

    return(
        <div className='border-b-[1px] border-white border-opacity-40 pb-4'>
        <div className='flex justify-end px-4 pt-5'>
            {currentUser?.id === userId ? (
                <Button secondary label="Edit" onClick={editModal.onOpen} />
            ) : (
                <Button
            onClick={toggleFollow} 
            label={isFollowing ? 'Unfollow' : 'Follow'}
            secondary={!isFollowing}
            outline={isFollowing}
          />
            )}
        </div>
        <div className='mt-5 px-5'>
            <div className='flex flex-col'>
                <p className='text-whitee text-2xl font-semibold'>
                    {fetchedUser?.name}
                </p>
                <p className="text-md text-white">@{fetchedUser?.username}</p>
            </div>
            <div className='flex flex-col mt-4'>
                <p className="text-whitee">{fetchedUser?.bio}</p>
            </div>
            <div className='
            flex
            flex-row
            items-center
            gap-2
            mt-4
            text-white'
            >
                <BiCalendar size={24} />
                <p>
                    Joined {createdAt}
                </p>
            </div>
            <div className='flex flex-row items-center mt-4 gap-6'>
            <div className='flex flex-row items-center gap-1'>
                <p className='text-whitee'>
                    {fetchedUser?.followingIds?.length}
                </p>
                <p className='text-white'>
                    Following</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <p className='text-whitee'>
                    {fetchedUser?.followersCount || 0}
                </p>
                <p className='text-white'>
                    Followers</p>
            </div>
        </div>


        </div>
        
        </div>
    );
}

export default UserBio;