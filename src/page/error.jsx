import { isRouteErrorResponse, useRouteError } from "react-router";
import ErrorTemplate from "../components/layouts/ErrorTemplate";
import { ErrorFragment } from "../components/fragments";

const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <ErrorTemplate>
                    <ErrorFragment status={error.status}>
                        Sorry, Not Found Page
                    </ErrorFragment>
                </ErrorTemplate>
            );
        }

        if (error.status === 401) {
            return (
                <ErrorTemplate>
                    <ErrorFragment status={error.status}>
                        You aren`t authorized to see this
                    </ErrorFragment>
                </ErrorTemplate>
            );
        }

        if (error.status === 503) {
            return (
                <ErrorTemplate>
                    <ErrorFragment status={error.status}>
                        Looks like our API is down
                    </ErrorFragment>
                </ErrorTemplate>
            );
        }

        if (error.status === 418) {
            return (
                <ErrorTemplate>
                    <ErrorFragment status={error.status}>
                    🫖
                    </ErrorFragment>
                </ErrorTemplate>
            );
        }
    }

    return (
    <ErrorTemplate>
        <ErrorFragment status={error.status}>
            Something want wrong
        </ErrorFragment>
    </ErrorTemplate>
    );
}

export default ErrorPage