import { Children } from 'react';

import { ForTypes} from './types';

const For = ({ each, render }: ForTypes): any => Children.toArray(
	each?.map((item: any, index: number) => render(item, index)))

export default For;