import { useAtom } from 'jotai';
import { loginAtom, userAtom } from '../store';

const useStore = () => {
  const [login, setLogged] = useAtom(loginAtom);
  const [dbUser, setDbUser] = useAtom(userAtom);

  return { login, setLogged, dbUser, setDbUser };
};

export default useStore;
