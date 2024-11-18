import { isFunction, uniqueId } from 'lodash';
import React from 'react';
import { createContextForController } from 'react-controller-context';

type ModalHandle = string;

type OnClose = (...args: any[]) => void;

interface ClosableModal {
    onClose: OnClose;
}

interface ModalOptions<T extends ClosableModal> {
    component: (props: T) => JSX.Element;
    props?: Omit<T, 'onClose'>;
    onClose?: OnClose;
}

interface Modal<T extends ClosableModal> extends ModalOptions<T> {
    id: ModalHandle;
}

const useController = () => {
    const [ modals, updateModals] = React.useState<Modal<any>[]>([]);
    function showModal<T extends ClosableModal> (modalOptions: ModalOptions<T>) {
        const modal: Modal<T> = {
            ...modalOptions,
            id: uniqueId()
        }
        updateModals(m => [...m, modal]);
        return modal.id;
    }
    function removeModal (modalHandle: ModalHandle) {
        updateModals(modals => modals.filter(m => m.id !== modalHandle));
    }
    return {
        showModal,
        modals,
        removeModal
    }
}

const ModalRenderer = () => {
    const { modals, removeModal } = useModalStack();
    const modal = modals.length > 0 ? modals[modals.length - 1] : null;
    if (!modal) {
        return null
    }
    const Modal = modal.component;
    const props = modal.props;
    const onClose = (...args: any[]) => {
        removeModal(modal.id);
        if (modal.onClose && isFunction(modal.onClose)) {
            modal.onClose(...args);
        }
    }
    return props ? (
        <Modal
            {...props}
            onClose={onClose}
        />
    ) : (
        <Modal onClose={onClose} />
    );
};

export const ModalStackProvider = ({ children }: React.PropsWithChildren) => {
    const Provider = context.Provider;
    return (
        <Provider>
            {children}
            <ModalRenderer />
        </Provider>
    )
}

const context = createContextForController(useController);
export const useModalStack = context.useController;