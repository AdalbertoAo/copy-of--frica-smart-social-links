
import React from 'react';
import type { SocialLink } from '../types';

interface SocialLinkButtonProps {
  link: SocialLink;
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ link }) => {
  const { Icon } = link;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-full py-3.5 rounded-lg font-semibold text-zinc-900 dark:text-white bg-slate-200 dark:bg-zinc-700 ${link.hoverColor} hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-white dark:focus:ring-offset-zinc-800`}
    >
      <Icon className="w-5 h-5" />
      <span className="ml-3">{link.name}</span>
    </a>
  );
};

export default SocialLinkButton;
