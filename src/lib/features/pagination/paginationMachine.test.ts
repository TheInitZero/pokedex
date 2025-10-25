import { describe, test, expect } from 'vitest';
import { createActor } from 'xstate';
import { paginationMachine } from './paginationMachine';

describe('paginationMachine', () => {
	test(`When currentPage is same as the last page, 'NEXT' event has no effect.`, () => {
		const actor = createActor(paginationMachine, {
			input: {
				currentPage: 1,
				lastPage: 1,
				cardsPerPage: 12,
				sliceStartIndex: 0
			}
		});

		actor.start();

		let snapshot = actor.getSnapshot();
		expect(snapshot.context.sliceStartIndex).toBe(0);
		expect(snapshot.context.currentPage).toBe(snapshot.context.lastPage);

		actor.send({ type: 'NEXT' });

		snapshot = actor.getSnapshot();
		expect(snapshot.context.sliceStartIndex).toBe(0);
		expect(snapshot.context.currentPage).toBe(snapshot.context.lastPage);

		actor.stop();
	});

	test(`When currentPage is the first page, 'PREV' event has no effect.`, () => {
		const actor = createActor(paginationMachine, {
			input: {
				currentPage: 1,
				lastPage: 1,
				cardsPerPage: 12,
				sliceStartIndex: 0
			}
		});

		actor.start();

		let snapshot = actor.getSnapshot();
		expect(snapshot.context.sliceStartIndex).toBe(0);
		expect(snapshot.context.currentPage).toBe(snapshot.context.lastPage);

		actor.send({ type: 'PREV' });

		snapshot = actor.getSnapshot();
		expect(snapshot.context.sliceStartIndex).toBe(0);
		expect(snapshot.context.currentPage).toBe(snapshot.context.lastPage);

		actor.stop();
	});

	describe(`When 'NEXT' event is sent,`, () => {
		test('currentPage is incremented by 1.', () => {
			const actor = createActor(paginationMachine, {
				input: {
					currentPage: 1,
					lastPage: 2,
					cardsPerPage: 12,
					sliceStartIndex: 0
				}
			});

			actor.start();

			let snapshot = actor.getSnapshot();
			expect(snapshot.context.currentPage).toBe(1);

			actor.send({ type: 'NEXT' });

			snapshot = actor.getSnapshot();
			expect(snapshot.context.currentPage).toBe(2);

			actor.stop();
		});

		test('sliceStartIndex is incremented by cardsPerPage.', () => {
			const actor = createActor(paginationMachine, {
				input: {
					currentPage: 1,
					lastPage: 2,
					cardsPerPage: 12,
					sliceStartIndex: 0
				}
			});

			actor.start();

			let snapshot = actor.getSnapshot();
			expect(snapshot.context.sliceStartIndex).toBe(0);

			actor.send({ type: 'NEXT' });

			snapshot = actor.getSnapshot();
			expect(snapshot.context.sliceStartIndex).toBe(12);

			actor.stop();
		});
	});

	describe(`When 'PREV' event is sent,`, () => {
		test('currentPage is decremented by 1.', () => {
			const actor = createActor(paginationMachine, {
				input: {
					currentPage: 2,
					lastPage: 2,
					cardsPerPage: 12,
					sliceStartIndex: 12
				}
			});

			actor.start();

			let snapshot = actor.getSnapshot();
			expect(snapshot.context.currentPage).toBe(2);

			actor.send({ type: 'PREV' });

			snapshot = actor.getSnapshot();
			expect(snapshot.context.currentPage).toBe(1);

			actor.stop();
		});

		test('sliceStartIndex is decremented by cardsPerPage.', () => {
			const actor = createActor(paginationMachine, {
				input: {
					currentPage: 2,
					lastPage: 2,
					cardsPerPage: 12,
					sliceStartIndex: 12
				}
			});

			actor.start();

			let snapshot = actor.getSnapshot();
			expect(snapshot.context.sliceStartIndex).toBe(12);

			actor.send({ type: 'PREV' });

			snapshot = actor.getSnapshot();
			expect(snapshot.context.sliceStartIndex).toBe(0);

			actor.stop();
		});
	});

	describe(`When 'SET_CONTEXT' event is sent,`, () => {
		test('context is set to the new context provided in payload.', () => {
			const input = {
				currentPage: 2,
				lastPage: 2,
				cardsPerPage: 12,
				sliceStartIndex: 12
			};

			const actor = createActor(paginationMachine, { input });

			actor.start();

			let snapshot = actor.getSnapshot();
			expect(snapshot.context).toEqual(input);

			const newContext = {
				currentPage: 1,
				lastPage: 42,
				cardsPerPage: 16,
				sliceStartIndex: 0
			};
			actor.send({ type: 'SET_CONTEXT', payload: { context: newContext } });

			snapshot = actor.getSnapshot();
			expect(snapshot.context).toEqual(newContext);
		});
	});
});
