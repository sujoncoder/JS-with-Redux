// Collect dom elements.
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

// Initial State;
const initialState = {
    value: 0,
};

// Action indentifiers;
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action creator.
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
const counterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT){
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if(action.type === DECREMENT){
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
};

// create store.
const store = Redux.createStore(counterReducer);

// Create render function.
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// Initially state.
render();

// Send to subscriber.
store.subscribe(render);

// Button action.
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(5))
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(5))
});