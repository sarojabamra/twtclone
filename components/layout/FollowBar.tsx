import useUsers from '@/hooks/useUsers';

import Avatar from '../Avatar';
import Button from '../Button';

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-slate bg-opacity-40 rounded-xl p-5">
        <h2 className="text-whitee text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-5 mt-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4 text-left">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-whitee font-semibold text-sm">{user.name}</p>
                <p className="text-white text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;