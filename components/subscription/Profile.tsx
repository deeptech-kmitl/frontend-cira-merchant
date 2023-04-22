import { Country } from '@/data/country';
import { StoreUserAuth } from '@/lib/store';
import { useState } from 'react';
import { Countries } from './Payment';

interface Props {
  user: StoreUserAuth | null;
}

interface AddressValue {
  label: string;
  value: string;
}

interface UserAddress {
  country: string;
  address: string;
  city: string;
  postcode: string;
  state: string;
}

const Profile = (props: Props) => {
  const { user } = props;
  const [toggleEdit, setToggleEdit] = useState(false);
  const [address, setAddress] = useState<UserAddress>({
    country: 'Mexico',
    address: 'Suite 359-315 8 Ave SW',
    city: 'Calgary',
    postcode: '10520',
    state: 'Alberta',
  });
  const [draftAddress, setDraftAddress] = useState<UserAddress>(address);
  const handleCancel = () => {
    setDraftAddress(address);
    setToggleEdit(false);
  };

  const handleSave = () => {
    setAddress(draftAddress);
    setToggleEdit(false);
  };

  return (
    <div className="w-full h-full">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1  leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block  font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="pl-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6 disabled:bg-gray-200/50 rounded-md"
                    value={user?.username}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block  font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="pl-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6 disabled:bg-gray-200/50 rounded-md"
                    disabled
                    value={user?.email}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1  leading-6 text-gray-600">
            Use an address where you can receive mail.
          </p>

          {!toggleEdit && (
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <p className="block w-full font-semibold py-1.5 sm:leading-6">
                    {address.country}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="country"
                  className="block font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <p className="block w-full font-semibold py-1.5 sm:leading-6">
                    {address.address}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <p className="block w-full font-semibold py-1.5 sm:leading-6">
                    {address.city}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <p className="block w-full font-semibold py-1.5 sm:leading-6">
                    {address.state}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal Code
                </label>
                <div className="mt-2">
                  <p className="block w-full font-semibold py-1.5 sm:leading-6">
                    {address.postcode}
                  </p>
                </div>
              </div>
            </div>
          )}

          {toggleEdit && (
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block  font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    name="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6"
                    onChange={(e) => (draftAddress.country = e.target.value)}
                    defaultValue={address.country}
                  >
                    {Country.map((item: Countries, i: number) => (
                      <option value={item.Name} key={i}>
                        {item.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="street-address"
                  className="block  font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    onChange={(e) => (draftAddress.address = e.target.value)}
                    defaultValue={address.address}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block  font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    onChange={(e) => (draftAddress.city = e.target.value)}
                    defaultValue={address.city}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    onChange={(e) => (draftAddress.state = e.target.value)}
                    defaultValue={address.state}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block  font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    onChange={(e) => (draftAddress.postcode = e.target.value)}
                    defaultValue={address.postcode}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {toggleEdit && (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleCancel}
            type="button"
            className=" font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="rounded-md bg-primary-1 px-3 py-2  font-semibold text-white shadow-sm hover:bg-primary-1/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-1/90"
          >
            Save
          </button>
        </div>
      )}

      {!toggleEdit && (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => setToggleEdit(true)}
            className="rounded-md bg-primary-1 px-3 py-2  font-semibold text-white shadow-sm hover:bg-primary-1/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-1/90"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
