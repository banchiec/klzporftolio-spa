import { RenderIfTypes } from "./types";

const RenderIf = ({ condition, children}: RenderIfTypes): JSX.Element => (
	condition ? <>{children}</> : <></>
)
export default RenderIf;
