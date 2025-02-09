// Imports
import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { API_DATA_URL, CREATE_DATA, EDIT_DATA, SHOW_DATA } from './constants/apiConstants';

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";

import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";

import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";

import { ClientShow, ClientCreate, ClientList, ClientEdit } from "./pages/clients/Clients";
import { ChartsList } from "./pages/charts/Charts";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                dataProvider={dataProvider(API_DATA_URL)}
                resources={[
                  {
                    name: "blog_posts",
                    list: "/blog-posts",
                    create: `/blog-posts/${CREATE_DATA}`,
                    edit: `/blog-posts/${EDIT_DATA}`,
                    show: `/blog-posts/${SHOW_DATA}`,
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "categories",
                    list: "/categories",
                    create: `/categories/${CREATE_DATA}`,
                    edit: `/categories/${EDIT_DATA}`,
                    show: `/categories/${SHOW_DATA}`,
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "clients",
                    list: "/clients",
                    create: `/clients/${CREATE_DATA}`,
                    edit: `/clients/${EDIT_DATA}`,
                    show: `/clients/${SHOW_DATA}`,
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "Charts",
                    list: "/posts"
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "9SQeaX-i1W1OE-DTHtpY",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2
                        Header={() => <Header sticky />}
                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="blog_posts" />}
                    />
                    <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route>
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="/clients">
                      <Route index element={<ClientList />} />
                      <Route path="create" element={<ClientCreate />} />
                      <Route path="edit/:id" element={<ClientEdit />} />
                      <Route path="show/:id" element={<ClientShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                    <Route path="/posts">
                      <Route index element={<ChartsList />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
