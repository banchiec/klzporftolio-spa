import { ReactNode } from "react";

export interface ForTypes {
	each: any[],
	render: (item: any, index: number) => ReactNode | JSX.Element
}