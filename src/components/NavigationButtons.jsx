import { Link } from 'react-router-dom';

const NavigationButtons = ({ backPath , nextPath }) => {
  return (
    <div className={`mt-5 flex items-center pb-4 px-4 ${backPath ? 'justify-between' : 'justify-end'
    }`}>
        { backPath &&<Link
            to={backPath}
            className='
          bg-sky-400
          rounded-full
          border-gray-200
          px-10
          py-3
          text-center
          text-black
          hover:bg-yellow-950
          hover:text-red-100
          '
        >
            Back
        </Link>
        }
        <Link
            to={nextPath}
            className='
          bg-sky-400
          rounded-full
          border-gray-200
          px-10
          py-3
          text-center
          text-black
          hover:bg-yellow-950
          hover:text-red-100
          '
        >
            Next
        </Link>
    </div>
    );
};

export default NavigationButtons;