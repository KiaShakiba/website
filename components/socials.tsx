import Link from 'next/link';
import styles from '../styles/socials.module.scss';

import Twitter from '../icons/twitter.svg';
import Instagram from '../icons/instagram.svg';
import Vero from '../icons/vero.svg';

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
	}
];

export function getSocial(social: Social): React.ReactNode {
	return (
		<Link href={social.href} key={social.href}>
			<a target='_blank' className={`${styles.social} ${social.className}`}>
				<social.icon />
			</a>
		</Link>
	);
}

export type Social = {
	icon: React.Component;
	href: string;
	className: string;
};

export default socials;
