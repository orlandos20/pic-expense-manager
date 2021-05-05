import React, { useEffect, useState, createRef } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  Dimensions
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

const StyledImg = styled(Image)`
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height - 10};
`;

const StyledImgView = styled(View)`
  background: transparent;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledContainer = styled(View)`
  flex: 1;
  min-height: 100%;
`;

const StyledCamera = styled(Camera)`
  flex: 1;
  min-height: 100%;
`;

const StyledCamControls = styled(View)`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  justify-content: center;
`;

const Cam = ({
  route,
  navigation,
  reTake
}: {
  route?: any;
  navigation: any;
  reTake?: boolean;
}) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, takePhoto] = useState<any>(null);
  const CameraRef = createRef<any>();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePictureButtonPressed = async () => {
    if (CameraRef.current) {
      const options = { quality: 0.7 };
      const photo = await CameraRef.current.takePictureAsync(options);
      console.log("photo --> ", photo);
      console.log("photo.uri --> ", photo.uri);
      const { uri } = photo;
      takePhoto(uri);
    }
  };

  const pickImage = async () => {
    console.log("Entró al pickImage");
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      takePhoto(result.uri);
    }
  };

  return (
    <StyledContainer>
      {photo ? (
        <StyledImgView>
          <StyledImg source={{ uri: photo }} />

          <TouchableOpacity
            style={{ flex: 0.1, alignSelf: "flex-end", alignItems: "center" }}
            onPress={() => takePhoto(null)}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              retake
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Save
            </Text>
          </TouchableOpacity>
        </StyledImgView>
      ) : (
        <>
          <StyledCamera ref={CameraRef} type={type}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </StyledCamera>

          <StyledCamControls>
            <Button
              title="Take photo"
              color="#000"
              onPress={takePictureButtonPressed}
            />

            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
          </StyledCamControls>
        </>
      )}
    </StyledContainer>
  );
};

export default Cam;
