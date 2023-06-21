import styles from './page.module.scss';

export const metadata = {
	title: 'Repos',
};

async function fetchRepos() {
	await new Promise(resolve => setTimeout(resolve, 2000));
	return fetch('https://api.github.com/users/jamesrea83/repos')
		.then(response => {
			const data = response.json();
			return data;
		})
		.catch(error => {
			console.log(error);
		});
}

interface Repo {
	name: string;
}

const CodePage = async () => {
	const repos: Repo[] = await fetchRepos();
	return (
		<div className={styles.homePage}>
			<h1>Code Page</h1>
			<div>{repos.map(repo => repo.name)}</div>
		</div>
	);
};

export default CodePage;
