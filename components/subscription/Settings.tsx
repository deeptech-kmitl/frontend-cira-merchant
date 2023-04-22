import { StoreUserAuth } from '@/lib/store';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import Profile from './Profile';

interface TabProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

interface Props {
  user: StoreUserAuth | null;
}

const Settings = (props: Props) => {
  const { user } = props;
  const data: TabProps[] = [
    {
      label: 'Profile',
      value: 'profile',
      icon: <FaRegUserCircle />,
      component: <Profile user={user} />,
    },
    {
      label: 'Settings',
      value: 'settings',
      icon: <FiSettings />,
      component: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col divide-y divide-black/10">
      <div className="flex flex-col space-y-2 pb-4">
        <h3 className="text-4xl font-medium">Settings</h3>
        <p className="text-[#969696]">Change your settings here</p>
      </div>
      <div className="min-h-[70vh] pt-4 flex flex-col space-y-6">
        <div className="bg-[#fff]/50 rounded-md">
          <div className="p-6">
            <Tabs value="profile">
              <TabsHeader>
                {data.map((item: TabProps) => (
                  <Tab key={item.value} value={item.value} className="py-4">
                    <div className="flex items-center gap-2 px-4 ">
                      {item.icon}
                      {item.label}
                    </div>
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, component }) => (
                  <TabPanel key={value} value={value}>
                    {component}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
