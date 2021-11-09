import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Jumbotron } from "../components/Jumbotron";
import { Transition } from "../components/Transition";

const scrollUp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const projectData = [
    {
        id: 1,
        url: 'http://subastas.aseguate.com',
        name: 'Subastas',
        img: 'portafolio/subasta-asegua.png',
        description: `Sistema de subastas y cotizaciones. Portal Externo y porta interno.`
    },
    {
        id: 2,
        url: 'http://cotizador.aseguate.com/cliente',
        name: 'Seguros Automovil',
        img: 'portafolio/cotizador-cliente.png',
        description: 'Sistema cotizador de seguros de automoviles. Externo cliente final y administracion cliente interno.'
    },
    {
        id: 3,
        url: 'https://proyectosfernando2020.000webhostapp.com/Gobuy/index.php',
        name: 'Carrito de Compras',
        img: 'portafolio/gobuy.png',
        description: `Es un carrito de compras de diferentes productos. 
                    Además posee un area de administracion de los productos con dashboard y control de los diferentes anuncion del sitio web.`
    },
    {
        id: 4,
        url: 'https://emojisunglasses.gt',
        name: 'Cotización Emoji',
        img: 'portafolio/emoji.png',
        description: `Es un sitio con cotizacion y envío de nuevas notificaciones de anuncios. Con área de administracion de productos con dashboard.`
    },
    {
        id: 5,
        url: 'https://proyectosfernando2020.000webhostapp.com/efpem/index.php',
        name: 'Asignación de Examen',
        img: 'portafolio/efpem.png',
        description: `Sitio de asignación de examenes privados y entrega de resultados obtenidos.`
    }
];

export const HomePage = () => {
    const [projectList] = useState(projectData)

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <Transition>
      <div className="home">
        <div className="utilities">
            <Jumbotron/>
        </div>
        <div className="text-container">
            <h2 className="text-theme title-section">Experiencia</h2>    
        </div>  
        
        <div className="utilities">
            <h3 className="text-theme">Desarrollador de sitios web con varias tecnologías tales como Laravel, Angular, Android, Bootstrap, Materialize, JQuery, HTML5, CSS3 y lenguajes de programación como PHP, Javascript. Almacenado de datos con bases de datos relacionales MySQL.</h3>
            <h3 className="text-theme">Capacitador en Microsoft Office. Catedrático en varias instituciones educativas en la enseñanza de lenguajes de programación, programas multimedia, contrucción de planos y digramas 3D entre otros.</h3>
        </div>
        <div className="text-container">
            <h2 className="text-theme title-section">Portafolio</h2>    
        </div>
        <div className="countries-container">
            {projectList.length ? (
                projectList.map((project) =>{
                    return (
                        <Card project={project} key={project.id} scrollUp={scrollUp} />
                    )
                })
            ) : (
                ''
            )}
        </div>
      </div>
    </Transition>
  )
}
