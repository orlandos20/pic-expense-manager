import Home from "../screens/Home";
import AddExpense from "../screens/AddExpense";
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
    name: "Add a Expense",
    component: AddExpense,
    options: {
      title: "Add a Expense"
    }
  },
  {
    name: "Modal",
    component: CreateItemModal,
    options: {
      title: "add item"
    }
  }
];

export const DrawerStackRoutes = [
  {
    name: "Add a Expense",
    component: AddExpense,
    options: {
      title: "Add a Expense",
      headerShown: true
    }
  },
  {
    name: "Modal",
    component: CreateItemModal,
    options: {
      title: "add item",
      headerShown: true
    }
  }
];
