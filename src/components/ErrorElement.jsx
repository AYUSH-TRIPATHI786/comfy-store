import { useRouteError } from "react-router"

const ErrorElement = () => {
    const error = useRouteError();
  return (
    <h2 className="font-bold text-4xl">There was an error...</h2>
  )
}
export default ErrorElement