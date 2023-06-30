import { faker } from '@faker-js/faker';

const getImage = () => faker.image.urlLoremFlickr({ category:  'animals', width: 644, height: 362 });
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type: string) => (faker.animal as any)[type]();


interface IData {
	type: string;
	id: number;
	url: string;
	title: string;
	description: string;
	image: string;
 }

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
	}
	});

	return new Promise<IData[]>((resolve) => {
	setTimeout(() => {
		resolve(data);
	}, 100);
	});
};

export default fetchData;
