import { create } from 'zustand';

interface User {
    name: string,
    email: string,
    image: string,
}

interface State {
    isLoged: boolean,
    user: User,
}

interface Action {
    login: () => void,
}

export const useUserStore = create<State & Action>((set) => ({
  isLoged: false,
  user: {
    email: 'correo@gmail.com',
    name: 'Nombre usuario',
    image: '',
  },
  login: () => set(() => ({ isLoged: true })),
}));
