import { createBrowserHistory } from "history";

export const Browserhistory = createBrowserHistory();

// custom history object to allow navigation outside react components
export const history = {
    navigate: null,
    location: null
};