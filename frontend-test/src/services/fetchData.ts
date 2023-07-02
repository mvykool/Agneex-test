import { faker } from '@faker-js/faker';
import { IData } from '../context/SearchContext';

const getImage = () => faker.image.urlLoremFlickr({ category:  'animals', width: 600, height: 360 });
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTitle = (type: string) => (faker.animal as any)[type]();

const fetchData = (): Promise<IData[]> => {
const data = [...new Array(100)].map((_item, index) => {
	const type = getType();
	return { 
	type,
	id: index + 1,
	url: getUrl(),
	title: getTitle(type),
	description: getText(),
	image: getImage(),
	};
});

return new Promise<IData[]>((resolve) => {
	setTimeout(() => {
	resolve(data);
	}, 200); 
});
};

export default fetchData;