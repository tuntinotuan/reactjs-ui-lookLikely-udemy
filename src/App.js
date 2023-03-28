import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Main from "./components/layout/Main";
import PageNotFound from "./components/layout/PageNotFound";
const HomePage = lazy(() => import("./pages/HomePage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route
              path="/courses/development/"
              element={<CoursesPage></CoursesPage>}
            ></Route>
            <Route path="/movie/:movieId" element={<>abc</>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
