import { useRouteError } from "react-router-dom";
import { Layout } from "../components/Layout";

export const ErrorPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <Layout headline={`<span className="text-outline-main" data-content="OOPS!">OOPS!</span>`} sub={`Sorry, an unexpected error has occurred.`} children={undefined} timeline={new Timeline}>
      <div id="error-page" className="text-white">
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Layout>
  );
}