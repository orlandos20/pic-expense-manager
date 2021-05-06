import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

const AddFromCamera = ({ navigation }: { navigation: any }) => {
  const [photo, takePhoto] = useState<any>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (hasPermission) {
      (async () => {
        let image = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [16, 19],
          quality: 1,
          base64: true
        });

        if (image.cancelled) {
          navigation.goBack();
        }

        if (image) {
          console.log("image from imagePicker --> ", image);
          takePhoto(image);
          navigation.goBack();
        }
      })();
    }
  }, []);

  return null;
};

export default AddFromCamera;
