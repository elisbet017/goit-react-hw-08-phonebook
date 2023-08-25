export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleGetAllContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};
export const handleAddContactFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

export const handleDeleteContactFulfilled = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};
