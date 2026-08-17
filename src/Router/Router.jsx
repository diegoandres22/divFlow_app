import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import Privacidad from "@/pages/Privacidad/Privacidad";
import Terminos from "@/pages/Terminos/Terminos";
import AvisoLegal from "@/pages/AvisoLegal/AvisoLegal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // Layout wrapper
        children: [
            { path: "", element: <Home /> }, // default page
        ],
    },
    { path: "/privacidad", element: <Privacidad /> },
    { path: "/terminos", element: <Terminos /> },
    { path: "/aviso-legal", element: <AvisoLegal /> },
]);

export default router;
