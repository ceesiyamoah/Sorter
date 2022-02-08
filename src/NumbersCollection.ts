import { Sorter } from './Sorter';

export default class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	/**
	 *
	 * @param leftIndex number on the left to be compared
	 * @param rightIndex number on the right to be compared
	 * @returns true if left is greater than right else false
	 */
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	/**
	 *
	 * @param leftIndex number on left to swap
	 * @param rightIndex number on right to swap
	 */
	swap(leftIndex: number, rightIndex: number): void {
		[this.data[leftIndex], this.data[rightIndex]] = [
			this.data[rightIndex],
			this.data[leftIndex],
		];
	}
}
