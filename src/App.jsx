import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/header";
import LocationList from "./components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import HotelsProvider from "./components/context/HotelsProvider";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";
import BookmarkProvider from "./components/context/BookmarkListContext";

function App() {
  return (
    <BookmarkProvider>
      <HotelsProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookmarkLayout />}>
            <Route index element={<div>bookmark list </div>} />
            <Route path="add" element={<div>add new mark</div>} />
          </Route>
        </Routes>
      </HotelsProvider>
    </BookmarkProvider>
  );
}

export default App;
