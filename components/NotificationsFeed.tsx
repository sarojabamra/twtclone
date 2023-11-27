import useCurrentUser from "@/hooks/useCurrentUser";
import uesNotifications from "@/hooks/useNotifications";
import { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";

const NotificationsFeed = () => {

    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
    const { data: fetchedNotifications = [] } = uesNotifications(currentUser?.id);

    useEffect(() => {
        mutateCurrentUser();

    }, [mutateCurrentUser]);

    if (fetchedNotifications.length === 0) {
        return(
            <div className="
            text-white
            text-center
            p-6
            text-xl">
                No notifications
            </div>
        )
    }


    
  return (
    <div className="flex flex-col">
        {fetchedNotifications.map((notification: Record<string, any>) => (
            <div
            key={notification.id}
            className="
            flex
            flex-row
            items-center
            p-6
            gap-4
            border-b-[1px]
            border-white
            border-opacity-40"
            >
                <BsTwitter color="white" size={32} />
                <p className="text-whitee">
                    {notification.body}
                </p>

            </div>
        ))}

    </div>
  );
}

export default NotificationsFeed;