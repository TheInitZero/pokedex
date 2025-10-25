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
	| { type: 'SET_CONTEXT'; payload: { context: PaginationMachineContext } };

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
		SET_CONTEXT: {
			actions: [
				assign(function setContext({ context, event }) {
					return event.payload.context;
				})
			]
		}
	}
});
