import animation from '../assets/Animation - 1712705536027.json';
import Lottie from 'react-lottie';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto font-kufam">
      <section className="bg-white dark:bg-gray-900">
        <div className="container min-h-screen px-6 py-12 mx-auto flex-col sm:flex-row lg:flex lg:items-center lg:gap-8">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-amber-600">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn&apos;t exist.Here are some helpful links:</p>

            <div className="flex items-center mt-6 gap-x-3">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>Go back</span>
              </button>

              <Link
                to="/"
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-slate-700 rounded-lg shrink-0 sm:w-auto hover:bg-slate-800">
                Take me home
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
