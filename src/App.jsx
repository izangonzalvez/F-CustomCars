import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Suspense } from "react";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == "/login" || pathname == "/register") && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}
      <Routes>
        {routes.map(({ path, element }, key) =>
          element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      {/* <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[0, 10, 10]} />
        <Suspense fallback={null}>
          <ModelWithColor />
        </Suspense>
      </Canvas> */}
    </>
  );
}

export default App;
