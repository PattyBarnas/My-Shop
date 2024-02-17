import React from "react";
import NavBar from "../ui/NavBar";
import PageContent from "../features/Error/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage(props) {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <NavBar />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
