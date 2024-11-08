import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { toggleDarkModal } from '../store/indexes/App';

const useTheme = () => {

    const dispatch = useAppDispatch()

    const isDark = useSelector((state: RootState) => state.app.isDarkModal);
    
    const toggleDark = () => {
        dispatch(toggleDarkModal())
    }
    
    return {
        isDark,
        toggleDark
    };
};

export default useTheme;
