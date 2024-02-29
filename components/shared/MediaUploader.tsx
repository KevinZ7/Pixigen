import React from "react";
import { useToast } from "../ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";

type MediaUploadProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  publicId,
  image,
  type,
}: MediaUploadProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: "Image uploaded successfully",
      description: "1 credit was deducted from your account",
      duration: 5000,
      className: "success-toast",
    });
  };
  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong while uploading the image",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="pixigen"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original</h3>

          {publicId ? <>IMAGE HERE</> : <div> NO Image</div>}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
