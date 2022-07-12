import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />
			<Logo />
			<div className="m-3" />
			<Title />
			<Subtitle />
		</AbsoluteFill>
	);
};
