import React from "react";

type AvatarClusterProps = {
  usernames: string[];
  key: string;
};

const GithubAvatars: React.FC<AvatarClusterProps> = ({ usernames, key }) => {
  usernames.forEach(element => {
    console.log(key, element)
  });
  return (
    <div className="flex -space-x-4">
      {usernames.map((username, index) => (
        <div className="group relative" key={`${key}`}>
          <img
            key={`${index} ${key}`}
            src={`https://github.com/${username}.png`}
            alt={`Avatar of ${username}`}
            className="w-12 group-hover:-translate-y-2 trans-fast h-12 rounded-full border-2 bg-white border-white shadow-lg"
          />
          <p className="group-hover:opacity-100 shadow-md whitespace-nowrap opacity-0 trans-fast -translate-y-2 absolute -top-full bg-white p-2 rounded-md">
            {username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GithubAvatars;
