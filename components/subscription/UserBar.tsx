import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';

interface User {
  name: string;
}

interface Props {
  user: User;
}

const UserBar = (props: Props) => {
  const { user } = props;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center text-[#969696]">
        <AiOutlineSearch />
        <input
          type="text"
          className="bg-transparent border-none placeholder-[#969696]"
          placeholder="Search"
        />
      </div>
      <div className="flex space-x-4 items-center">
        <div className="text-[#969696]">
          <IoMdNotifications />
        </div>
        <div className="flex space-x-2 items-center">
          <div className="bg-blue-100 rounded-full text-blue-500 w-7 h-7 font-medium text-sm flex items-center justify-center">
            {user.name.slice(0, 1)}
          </div>
          <p className="text-[#1C1C1C] font-medium">{user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserBar;
