
import React from 'react';
import SocialLinkButton from './SocialLinkButton';
import { SOCIAL_LINKS, PROFILE_DATA } from '../constants';

const SocialCard: React.FC = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-center transition-all duration-500">
      
        <img src="./Logo.jpeg" alt="Africa Smart logo" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg" />
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
            {PROFILE_DATA.name}
        </h1>
        <p className="mt-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm sm:text-base">
            {PROFILE_DATA.location}
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-sm">
            {PROFILE_DATA.bio}
        </p>
        <div className="mt-6 flex flex-col space-y-4">
            {SOCIAL_LINKS.map((link) => (
                <SocialLinkButton key={link.name} link={link} />
            ))}
        </div>
    </div>
  );
};

export default SocialCard;