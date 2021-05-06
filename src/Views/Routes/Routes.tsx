import Home from "../screens/Home";
import AddFromCamera from "../screens/AddFromCamera";
import AddFromGallery from "../screens/AddFromGallery";
import CreateItemModal from "../screens/CreateItemModal";
import PhotoPreview from "../screens/PhotoPreview";

export const MainStackRoutes = [
  {
    name: "Home",
    component: Home,
    options: {
      title: "Home"
    }
  },
  {
    name: "photo preview",
    component: PhotoPreview,
    options: {
      title: "Photo Preview"
    }
  },
  {
    name: "Add from Camera",
    component: AddFromCamera,
    options: {
      title: "Add a Expense"
    }
  },
  {
    name: "Add from Gallery",
    component: AddFromGallery,
    options: {
      title: "add item"
    }
  }
];

export const DrawerStackRoutes = [
  {
    name: "Add from Camera",
    component: AddFromCamera,
    options: {
      title: "Add a Expense",
      headerShown: true
    }
  },
  {
    name: "Add from Gallery",
    component: AddFromGallery,
    options: {
      title: "add item",
      headerShown: true
    }
  }
];
