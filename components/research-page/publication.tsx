import Link from 'next/link';
import styles from '../../styles/research-page/publication.module.scss';

export type Props = {
	title: string;
	authors: Array<Author>;

	conference: Conference;
	pages: Pages;

	links: Links;
};

export default function Publication(props: Props) {
	const { conference, pages, links } = props;

	return (
		<div className={styles.container}>
			<Link href={links.page} className={styles.title}>{props.title}</Link>

			<div className={styles.authors}>
				{(() => {
					return props.authors.map((author, i) => {
						let elements =[getAuthor(author, i)];

						if (i === props.authors.length - 2) {
							elements.push(
								<span key={`sep-${i}`}>, and </span>
							);
						} else if (i < props.authors.length - 2) {
							elements.push(
								<span key={`sep-${i}`}>, </span>
							);
						}

						return elements;
					});
				})()}
			</div>

			<div className={styles.info}>
				<Link href={conference.link} target='_blank'>{conference.name}</Link>
				<span>{`, ${conference.month}, ${conference.year}, pp. ${pages.start}-${pages.end}`}</span>
			</div>

			<div className={styles.links}>
				{(() => {
					let elements = [
						getLink('PAGE', links.page)
					];

					if (links.pdf) {
						elements.push(getLink('PDF', links.pdf));
					}

					if (links.slides) {
						elements.push(getLink('SLIDES', links.slides));
					}

					if (links.video) {
						elements.push(getLink('VIDEO', links.video));
					}

					return elements;
				})()}
			</div>
		</div>
	);
}

function getAuthor(author: Author, key: number): React.ReactNode {
	if (author.link) {
		return (
			<Link href={author.link} key={`name-${key}`}>{author.name}</Link>
		);
	} else {
		return (
			<span key={`name-${key}`}>{author.name}</span>
		);
	}
}

function getLink(title: string, link: string): React.ReactNode {
	return [
		<span key={0}>[</span>,
		<Link href={link} target='_blank' key={1}>{title}</Link>,
		<span className={styles.bracketClosed} key={2}>]</span>
	];
}

type Author = {
	name: string;
	link?: string;
};

type Links = {
	page: string;
	pdf?: string;
	slides?: string;
	video?: string;
};

type Conference = {
	name: string;
	link: string;
	month: string;
	year: number;
};

type Pages = {
	start: number;
	end: number;
};
