export function match(param: string): boolean {
	const paramToNum = Number(param);
	return !isNaN(paramToNum) && paramToNum > 0;
}
