import "./Results.css"

interface Item {
	id: number;
	url: string;
	title: string;
	description: string;
}

interface ResultsListProps {
	paginatedResults: Item[];
	handleTitleClick: (index: number) => void;
}

const ResultsList = ({ paginatedResults, handleTitleClick }: ResultsListProps) => {

return (
	<>
		{paginatedResults.map((item, index) => (
		<div key={item.id} className='result-block'>
			<small>{item.url}</small>
			<h2 onClick={() => handleTitleClick(index)}>{item.title}</h2>
			<p>{item.description}</p>
		</div>
		))}
	</>
	);
};

export default ResultsList;