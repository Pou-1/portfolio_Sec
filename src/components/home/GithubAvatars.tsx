import React from "react";

type AvatarClusterProps = {
  usernames: string[];
};

const GithubAvatars: React.FC<AvatarClusterProps> = ({ usernames }) => {

  return (
    <div className="flex -space-x-4">
      {usernames.map((username, index) => (
        <img
          key={index}
          src={`https://github.com/${username}.png`}
          alt={`Avatar of ${username}`}
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
        />
      ))}
    </div>
  );
};

export default GithubAvatars;
