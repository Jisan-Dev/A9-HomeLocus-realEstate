import PropTypes from 'prop-types';
import { IoLocation } from 'react-icons/io5';
import { TbHomeCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

const PropertyCard = ({ property, isDelete = false, deleteFunc, index }) => {
  const { estate_title, price, status, image, location, facilities, id } = property;
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={index * 100} data-aos-duration="1000">
      <div className="block rounded-lg p-4 shadow-md shadow-gray-300">
        <img alt="" src={image} className="h-56 w-full rounded-md object-cover" />

        <div className="mt-2">
          <dl>
            <div className="flex items-center justify-between pt-1">
              <div>
                <dt className="sr-only">Price</dt>
                <dd className="text-lg text-gray-500 font-medium">{price}</dd>
              </div>
              <div>
                <dt className="sr-only">Status</dt>
                <dd>
                  <span className="text-sm bg-gray-800 rounded-md py-2 px-4 capitalize text-white font-medium">On {status}</span>
                </dd>
              </div>
            </div>

            <div className="mt-2">
              <dt className="sr-only">Title</dt>
              <dd className="text-xl font-medium">{estate_title}</dd>
            </div>

            <div>
              <dt className="sr-only">Location</dt>
              <dd className="text-neutral-500 text-base font-normal flex items-center gap-1">
                <span>
                  <IoLocation />
                </span>
                {location}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-3 text-xs flex-wrap">
            {facilities.map((facility, index) => (
              <div key={index} className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 badge badge-ghost">
                <TbHomeCheck />

                <div className="mt-1.5 sm:mt-0 ">
                  <p className="font-medium">{facility}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`flex ${isDelete ? 'justify-between items-center' : 'justify-end'} `}>
            <button className="group flex items-center bg-transparent p-2 text-sm font-medium text-gray-600 mt-1">
              <Link
                to={`/property-details/${id}`}
                className="relative pr-4 pb-1 text-gray-900 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                View Property
              </Link>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="24"
                xmlns="http://www.w3.org/2000s/svg"
                id="arrow-horizontal"
                className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-slate-900">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </button>

            {isDelete && (
              <div className="tooltip tooltip-left" data-tip="remove">
                <MdDelete onClick={() => deleteFunc(id)} className="text-xl cursor-pointer" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
  isDelete: PropTypes.bool,
  deleteFunc: PropTypes.func,
  index: PropTypes.number,
};
