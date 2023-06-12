import { ThreeDots } from 'react-loader-spinner'
import { Spinner } from './Loader.styled';

export const Loader = () => {
    return (
        <Spinner>
            <ThreeDots
    height="80" 
    width="80" 
    radius="9"
    color="#99CCFF" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
        </Spinner>
  );
};