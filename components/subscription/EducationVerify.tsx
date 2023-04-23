import { StoreUserAuth } from '@/lib/store';
import { PhotoIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  user: StoreUserAuth | null;
}

const EducationVerify = (props: Props) => {
  const { user } = props;
  const [image, setImage] = useState('');
  const fileRef = useRef(null);

  const isValidFileUploaded = (file: { type: string }) => {
    const validExtensions = ['png', 'jpeg', 'jpg'];
    const fileExtension = file.type.split('/')[1];
    return validExtensions.includes(fileExtension);
  };

  const fileChange = (e: any) => {
    if (e.target.files.length < 1) {
      return;
    }
    const file = e.target.files[0];
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const checkSize = file.size < MAX_FILE_SIZE;
    if (isValidFileUploaded(file) && checkSize) {
      setImage(URL.createObjectURL(file));
      toast.success('Success fully upload your image');
    } else if (!checkSize) {
      toast.error('File must not exceed 5MB large');
    } else {
      toast.error('Please upload valid image to verify');
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full h-full flex flex-col divide-y divide-black/10">
        <div className="flex flex-col space-y-2 pb-4">
          <h3 className="text-4xl font-medium">Education Verification</h3>
          <p className="text-[#969696]">
            Verify your education status to access our free tier services
          </p>
        </div>
        <div className="min-h-[70vh] pt-4 flex flex-col space-y-6">
          <div className="bg-[#fff]/50 rounded-md">
            <div className="p-6">
              <label
                htmlFor="cover-photo"
                className="block font-medium leading-7 text-gray-900"
              >
                Upload your student / teacher identification card
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ">
                {!image && (
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex  leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-primary-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-1 focus-within:ring-offset-2 hover:text-primary-1"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          ref={fileRef}
                          multiple={false}
                          className="sr-only"
                          onChange={(e) => fileChange(e)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, JPEG up to 5MB
                    </p>
                  </div>
                )}
                {image && (
                  <Image src={image} width={500} height={500} alt=""></Image>
                )}
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button className="rounded-md bg-primary-1 px-3 py-2  font-semibold text-white shadow-sm hover:bg-primary-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-1">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationVerify;
