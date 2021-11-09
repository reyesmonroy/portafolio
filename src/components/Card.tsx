
export const Card = ({ project, scrollUp }: any) => {
    return (
        <a href={`${project.url}`} target='_blank' onClick={scrollUp} rel="noreferrer">
          <div className="card">
            <div className="flag-container">
              <img src={project.img} alt={`${project.name} flag`} />
            </div>
            <div className="text-container">
              <h2>{project.name}</h2>
              <p>
                {project.description}
              </p>
            </div>
          </div>
        </a>
      )
}
