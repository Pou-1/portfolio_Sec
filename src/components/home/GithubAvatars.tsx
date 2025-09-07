import React from "react";

type AvatarClusterProps = {
	usernames: string[];
	projectName: string;
};

const GithubAvatars: React.FC<AvatarClusterProps> = ({
	usernames,
	projectName,
}) => {
	return (
		<div className="flex -space-x-4">
			{usernames.map((username, index) => (
				<a
					className="relative group"
					key={`${projectName} - ${index}`}
					href={`https://github.com/${username}`}
				>
					<img
						src={`https://github.com/${username}.png`}
						alt={`Avatar of ${username}`}
						className="w-12 h-12 bg-white border-2 border-white rounded-full shadow-lg group-hover:-translate-y-2 trans-fast"
					/>
					<p className="absolute p-2 -translate-y-2 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap trans-fast -top-full">
						{username}
					</p>
				</a>
			))}
		</div>
	);
};

export default GithubAvatars;
