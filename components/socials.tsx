import Link from 'next/link';
import styles from '../styles/socials.module.scss';

import Github from '../icons/github.svg';
import Instagram from '../icons/instagram.svg';
import Bluesky from '../icons/bluesky.svg';
import Mastodon from '../icons/mastodon.svg';
import Linkedin from '../icons/linkedin.svg';

const socials: Array<Social> = [
	{
		icon: Github,
		href: 'https://github.com/KiaShakiba/',
		className: styles.github
	},
	{
		icon: Instagram,
		href: 'https://instagram.com/kiashakiba',
		className: styles.instagram
	},
	{
		icon: Bluesky,
		href: 'https://bsky.app/profile/kiashakiba.ca',
		className: styles.bluesky
	},
	{
		icon: Mastodon,
		href: 'https://mstdn.ca/@kia',
		className: styles.mastodon
	},
	{
		icon: Linkedin,
		href: 'https://linkedin.com/in/kiashakiba',
		className: styles.linkedin
	}
];

export function getSocial(social: Social): React.ReactNode {
	return (
		<Link
			href={social.href}
			className={`${styles.social} ${social.className}`}
			target='_blank'
			rel='me'
			key={social.href}
		>
			<social.icon />
		</Link>
	);
}

export type Social = {
	icon: React.ElementType;
	href: string;
	className: string;
};

export default socials;
