// Collect dom element.
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initial state.
const initialState = {
    value: 0,
};


// Create reducer function.
const handleCounter = (state = initialState, action) => {
    if(action.type === "increment") {
        return {
            ...state,
            value: state.value + 3,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 2,
        };
    } else {
        return state
    }
};

// Create redux store.
const store = Redux.createStore(handleCounter);

// Create render function.
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// Initially call the function.
render();

// Create subscriber.
store.subscribe(render);

// Action button.
incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
    })
});

decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "decrement",
    })
});