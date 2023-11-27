import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

import Avatar from '../Avatar';

interface CommentItemProps {
  data: Record<string, any>;
}

const CommentItem: React.FC<CommentItemProps> = ({ data = {} }) => {
  const router = useRouter();

  const goToUser = useCallback((ev: any) => {
    ev.stopPropagation();

    router.push(`/users/${data.user.id}`)
  }, [router, data.user.id]);

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt])
    return (
        <div className="
        border-b-[1px]
        border-white
        border-opacity-40
        p-5
        cursor-pointer
        hover:bg-slate
        hover:bg-opacity-40
        transition">

            <div className="flex flex-row items-start gap-3">
              <div className='mt-1'>
                <Avatar userId={data.user.id} /></div>
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <p 
                        onClick={goToUser}
                        
                        className="
                        text-whitee
                        font-semibold
                        cursor-pointer
                        hover:underline
                        ">{data.user.name}</p>
                        <span
                        className='
                        text-white
                        cursor-pointer
                        hover:underline
                        hidden
                        md:block'>
                          @{data.user.username}
                        </span>
                        <span className='text-white text-sm'>
                          {createdAt} ago

                        </span>

                    </div>
                    <div className='text-whitee mt-1'>
                      {data.body}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CommentItem;