
export interface groupButtonsMarckType {
	buttonsMark: {
    name: string;
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    click: () => void;
}[]
}