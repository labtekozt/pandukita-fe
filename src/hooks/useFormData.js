import { useState } from "react";
import { toBase64, verifyFile } from "../helpers/base64";

const useFormData = (initialState, dataManage = null) => {
  const [data, setData] = useState(initialState);
  const handleImage = async (e) => {
    // validasi file
    const { files, id } = e.target;

    if (files && files.length > 0) {
      if (verifyFile(files)) {
        const currentFile = files[0];
        const base64Image = await toBase64(currentFile);
        const image = base64Image;
        dataManage
          ? dataManage((prev) => ({ ...prev, [id]: image }))
          : setData((prev) => ({ ...prev, [id]: image }));
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dataManage
      ? dataManage((prev) => ({ ...prev, [id]: value }))
      : setData((prev) => ({ ...prev, [id]: value }));
  };

  return { data, handleImage, handleChange };
};

export default useFormData;
