import Image from "next/image";

import useUser from "@/hooks/useUser";

import Avatar from "../Avatar";

interface UserHeroProps {
    userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
    const { data: fetchedUser } = useUser(userId);

    return (
        <div>
            <div className="bg-gradient-to-r from-dblue to-green h-44 relative">
                {fetchedUser?.coverImage && (
                    <Image
                    src={fetchedUser.coverImage}
                    fill
                    alt="Cover Image"
                    style={{ objectFit: 'cover'}}
                    />
                )}
                <div className="absolute -bottom-16 left-6">
                    <Avatar userId={userId} isLarge hasBorder />
                </div>
            </div>
        </div>
    );
}

export default UserHero;