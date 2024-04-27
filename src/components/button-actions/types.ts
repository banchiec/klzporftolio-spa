export interface buttonActionsType {
	className?: string,
	buttons?: (
		{
			icon: () => JSX.Element;
			quantity?: undefined;
			handleClick?: undefined;
		} | {
			icon: () => JSX.Element;
			quantity: number| undefined;
			handleClick?: () => void;
		})[]
}