import {Config} from 'remotion';
import {webpackOverride} from './src/webpack-override';

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);

Config.Bundling.overrideWebpackConfig(webpackOverride);
