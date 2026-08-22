
import { useNavigate, type NavigateOptions, type To } from 'react-router-dom';

export const useAppNavigation = () => {
  const navigate = useNavigate();
  const goTo = (to: To, options?: NavigateOptions) => {
    navigate(to, options);
  };



  const goBack = () => {
    navigate(-1);
  };


  return {
    goTo,
    goBack,
   
  };
};