import { Link } from "react-router-dom";
import { Transition } from "../components/Transition";
import { ReactComponent as ArrowBack } from "../images/arrow-back.svg";

export const ErrorPage = ({ error }: any) => {

  return (
    <Transition>
      <div className="error-page">
        <div className={error ? "container error" : "container"}>
          {!error && (
            <Link to="/" className="back">
              <button>
                <ArrowBack />
                <p>Back</p>
              </button>
            </Link>
          )}

          {error ? (
            <h1>
              No hay resultados para esta ruta.
            </h1>
          ) : (
            <h1>
              No hay resultados para esta ruta.
            </h1>
          )}
        </div>
      </div>
    </Transition>
  )
}
