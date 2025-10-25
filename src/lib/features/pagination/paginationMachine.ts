import { assign, setup } from 'xstate';

type PaginationMachineContext = {
	currentPage: number;
	lastPage: number;
	sliceStartIndex: number;
	cardsPerPage: number;
};

type PaginationMachineEvents =
	| { type: 'NEXT' }
	| { type: 'PREV' }
	| { type: 'UPDATE_LAST_PAGE'; payload: { lastPage: number } };

export const paginationMachine = setup({
	types: {
		context: {} as PaginationMachineContext,
		events: {} as PaginationMachineEvents,
		input: {} as PaginationMachineContext
	},
	guards: {
		canGoToNextPage({ context, event }) {
			const { currentPage, lastPage } = context;
			return currentPage + 1 <= lastPage;
		},
		canGoToPrevPage({ context, event }) {
			const { currentPage } = context;
			return currentPage - 1 >= 1;
		}
	},
	actions: {
		goToNextPage: assign({
			currentPage({ context, event }) {
				const { currentPage } = context;
				return currentPage + 1;
			},
			sliceStartIndex({ context, event }) {
				const { sliceStartIndex, cardsPerPage } = context;
				return sliceStartIndex + cardsPerPage;
			}
		}),
		goToPrevPage: assign({
			currentPage({ context, event }) {
				const { currentPage } = context;
				return currentPage - 1;
			},
			sliceStartIndex({ context, event }) {
				const { sliceStartIndex, cardsPerPage } = context;
				return sliceStartIndex - cardsPerPage;
			}
		})
	}
}).createMachine({
	id: 'pagination',
	context({ input }) {
		return input;
	},
	on: {
		NEXT: {
			guard: 'canGoToNextPage',
			actions: [{ type: 'goToNextPage' }]
		},
		PREV: {
			guard: 'canGoToPrevPage',
			actions: [{ type: 'goToPrevPage' }]
		},
		UPDATE_LAST_PAGE: {
			actions: [
				assign({
					lastPage({ context, event }) {
						return event.payload.lastPage;
					}
				})
			]
		}
	}
});
