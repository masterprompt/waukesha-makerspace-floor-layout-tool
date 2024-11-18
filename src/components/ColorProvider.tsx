import { createContextForController } from "react-controller-context";
import useLocalStorage from "use-local-storage";

const useController = () => {
    return useLocalStorage('widgetColor', '#3f51b5');
};

const context = createContextForController(useController);
export const ColorProvider = context.Provider;
export const useColor = context.useController;