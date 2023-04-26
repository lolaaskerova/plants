import MainRoot from "../components/MainRoot";
import Detail from "../components/detail/Detail";
import Account from "../pages/account/Account";
import Cactus from "../pages/cactus/Cactus";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Plant from "../pages/plant/Plant";
import Questions from "../pages/questions/Questions";
import Shop from "../pages/shop/Shop";
import Story from "../pages/story/Story";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "plant",
        element: <Plant />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cactus",
        element: <Cactus />,
      },
      {
        path: "story",
        element: <Story />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "product/:id",
        element: <Detail />,
      },
    ],
  },
];
