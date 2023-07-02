import "./Results.css"
import Logo from '../../assets/images/logo.png'

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	handlePreviousPage: () => void;
	handleNextPage: () => void;
}


const Pagination =
({ currentPage, totalPages, handlePreviousPage, handleNextPage }: PaginationProps) => {

return (

<div className='results-pagination'>
	<img src={Logo} alt="logo" />
	<div className='pagination-controls'>
	<button
		disabled={currentPage === 1}
		onClick={handlePreviousPage}
	>
		Previous
	</button>

	{Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
		<button
		key={pageNumber}
		disabled={pageNumber === currentPage}
		onClick={() => handleNextPage()}
		>
		{pageNumber}
		</button>
	))}

	<button
		disabled={currentPage === totalPages}
		onClick={handleNextPage}
	>
		Next
	</button>
	</div>
</div>
);
};

export default Pagination;