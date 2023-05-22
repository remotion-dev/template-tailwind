import {enableTailwind} from '@remotion/tailwind';
import {WebpackOverrideFn} from 'remotion';

export const webpackOverride: WebpackOverrideFn = (currentConfiguration) => {
	return enableTailwind(currentConfiguration);
};
