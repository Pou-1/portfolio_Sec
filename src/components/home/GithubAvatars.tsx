import React, { useEffect, useState } from "react";

type AvatarClusterProps = {
  usernames: string[];
};

const GithubAvatars: React.FC<AvatarClusterProps> = ({ usernames }) => {
  const [avatars, setAvatars] = useState<string[]>([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const responses = await Promise.all(
          usernames.map((username) =>
            fetch(`https://api.github.com/users/${username}`).then((res) =>
              res.json()
            )
          )
        );
        setAvatars(responses.map((user) => user.avatar_url));
      } catch (error) {
        console.error("Error fetching GitHub avatars:", error);
      }
    };
    fetchAvatars();
  }, [usernames]);

  return (
    <div className="flex -space-x-4">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`Avatar ${index}`}
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
        />
      ))}
    </div>
  );
};

export default GithubAvatars;
