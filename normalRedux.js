// Collect dom element.
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initial state.
const initialState = {
    value: 0,
};

// Action identifiyers.
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action crators.
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
};

// Create reducer function.
const handleCounter = (state = initialState, action) => {
    if(action.type === "increment") {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload,
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
    store.dispatch(increment(5))
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(3))
});