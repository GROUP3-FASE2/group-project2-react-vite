import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Addmentee from "./pages/AddMentee";
import UserList from "./pages/UserList";
import MenteeLog from "./pages/MenteeLog";
import ClassList from "./pages/ClassList";
import MenteeList from "./pages/MenteeList";
import PageNotFound from "./pages/PageNotFound";
import store from "./store/store";

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/classlist" element={<ClassList />} />
              <Route path="/menteelist" element={<MenteeList />} />
              <Route path="/menteelog" element={<MenteeLog />} />
              <Route path="/addmentee" element={<Addmentee />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
