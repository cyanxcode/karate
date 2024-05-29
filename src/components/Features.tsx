export default function Features() {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h3 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-8">
          Facilities Included
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
          <div className="text-center">
            <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto ">
              <svg
                className="flex-shrink-0 size-5 text-gray-600 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Expert Coach
              </h3>
              <p className="mt-1 text-gray-600 ">
                Proffesional Trainer with Black Belt <br /> & International
                competitive experience.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto ">
              <svg
                className="flex-shrink-0 size-5 text-gray-600 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Fitness Specialized
              </h3>
              <p className="mt-1 text-gray-600 ">
                Focused on fitness and overall growth
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto ">
              <svg
                className="flex-shrink-0 size-5 text-gray-600 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800">
                #1 Academy in Meerut
              </h3>
              <p className="mt-1 text-gray-600 ">
                One on one customized training <br /> as per personal needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
