import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import tesseractImg from "../utils/tesseractImg";

const AddFromGallery = ({ navigation }: { navigation: any }) => {
  const [photo, takePhoto] = useState<any>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  //   useEffect(() => {
  //     if (photo) {
  //       console.log("esta entrando en el tercer useEffect");
  //       const photoData = {
  //         name: "img.fileName",
  //         type: photo.type,
  //         uri:
  //           Platform.OS === "ios" ? photo.uri.replace("file://", "") : photo.uri
  //       };
  //       //@ts-ignore
  //       tesseractImg(photoData);

  //       console.log("photo --> ", photo);
  //     }
  //   }, [photo]);

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
        let image = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          allowsMultipleSelection: false,
          aspect: [16, 19]
          //   base64: true
        });

        if (!image.cancelled) {
          console.log("esta entrando en el !image.cancelled");
          const photoData = {
            name: "img.fileName",
            type: image.type,
            uri:
              Platform.OS === "ios"
                ? image.uri.replace("file://", "")
                : image.uri
          };

          console.log("photoData --> ", photoData);
          //@ts-ignore
          tesseractImg(photoData);
          takePhoto(image);
        }

        // if (image.cancelled) {
        //   navigation.goBack();
        // }
      })();
    }
  }, [hasPermission]);

  return null;
};

export default AddFromGallery;
