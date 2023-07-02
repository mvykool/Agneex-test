import "./Results.css"

interface Item {
id: number;
url: string;
title: string;
description: string;
image: string; 
}

interface SelectedImageProps {
selectedItem: Item;
closeMobileView: () => void;
isLoading: boolean;
}


const SelectedImage = ({ selectedItem, closeMobileView, isLoading }: SelectedImageProps) => {
return (
<div className='selected-image'>
<div className='layer' onClick={closeMobileView}></div>
<div className='selected-img-card'>
	{isLoading ? (
	<div className='loader'></div>
	) : (
	<>
		<img src={selectedItem.image} alt='Selected Item' />
		<small>{selectedItem.url}</small>
		<h3>{selectedItem.title}</h3>
		<p>{selectedItem.description}</p>
	</>
	)}
</div>
</div>
);
};

export default SelectedImage;