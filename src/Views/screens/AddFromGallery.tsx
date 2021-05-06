import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

const AddFromGallery = () => {
  const [photo, takePhoto] = useState<any>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const {
        status
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (hasPermission) {
      (async () => {
        console.log("Entró en el async de la galeria");
        let image = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          allowsMultipleSelection: false,
          aspect: [16, 19],
          base64: true
        });

        if (image) {
          console.log("image from imagePicker --> ", image);
          takePhoto(image);
        }
      })();
    }
  }, []);

  return null;
};

export default AddFromGallery;
