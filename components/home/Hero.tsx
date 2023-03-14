import PrimaryButton from '../shared/PrimaryButton';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center py-36">
        <div className="w-3/5 flex flex-col justify-center items-center text-center space-y-14">
          <h1 className="text-6xl font-bold inline-block bg-gradient-to-r from-[#9A5F06] via-[#BE911F] via-[#FCB040] to-[#E4D395] bg-clip-text text-transparent leading-[72px]">
            Everything you need to grow your business
          </h1>
          <p className="w-4/5 text-[#737373]">
            CIRA does everything you need to start and grow your business.
            Attract clients through engaging face detection and simplify your
            business operations.
          </p>
          <PrimaryButton>
            <p>Get Started With CiRA Today</p>
          </PrimaryButton>
          <div className="flex space-x-6">
            <div className="flex space-x-2 items-center">
              <div className="p-2 bg-primary-1/20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FCB040"
                  className="w-4 h-4"
                >
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path
                    fill-rule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-primary-1">
                Support many payment methods.
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="p-2 bg-primary-1/20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FCB040"
                  className="w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                </svg>
              </div>
              <p className="text-sm text-primary-1">
                Get free trial for all user.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
