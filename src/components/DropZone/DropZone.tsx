import React from 'react';
import Dropzone, { DropzoneProps } from 'react-dropzone';
import { tw } from 'twind';

const DropZone = (props: DropzoneProps) => {
  return (
    <Dropzone {...props}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className={tw(`border border-dashed border-gray-300 relative h-48 mb-4 rounded-md`)}>
          <input
            {...getInputProps()}
            className={tw(`cursor-pointer relative block opacity-0 w-full h-full p-20 z-50`)}
          />
          <div className={tw(`text-center px-10 py-16 absolute top-0 right-0 left-0 m-auto`)}>
            <h4>Browse Files</h4>
            <p className={tw(`text-sm`)}>Drag and Drop file here</p>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default DropZone;
