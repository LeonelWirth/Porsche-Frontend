import type { FC } from "react";
import { useRoutes } from "react-router-dom";
import { homeRoutes } from "../../home/routes/index.routes";


const MainRouter: FC = () => {

  const element = useRoutes([
    homeRoutes,
  ]);
  return element;
};

export default MainRouter;
