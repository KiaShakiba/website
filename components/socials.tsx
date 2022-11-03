import Link from 'next/link';
import styles from '../styles/socials.module.scss';

import Twitter from '../icons/twitter.svg';
import Instagram from '../icons/instagram.svg';
import Vero from '../icons/vero.svg';
import Linkedin from '../icons/linkedin.svg';

const socials: Array<Social> = [
	{
		icon: Twitter,
		href: 'https://twitter.com/kiashakiba',
		className: styles.twitter
	},
	{
		icon: Instagram,
		href: 'https://instagram.com/kiashakiba',
		className: styles.instagram
	},
	{
		icon: Vero,
		href: 'https://vero.co/kiashakiba',
		className: styles.vero
	},
	{
		icon: Linkedin,
		href: 'https://linkedin.com/in/kiashakiba',
		className: styles.linkedin
	}
];

export function getSocial(social: Social): React.ReactNode {
	return (
		<Link href={social.href} className={`${styles.social} ${social.className}`} target='_blank' key={social.href}>
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
