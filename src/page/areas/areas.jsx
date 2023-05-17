import React, {useEffect} from 'react'
import './areas.css'
import Tagline from '../../component/tagline/tagline'
import aresMap from '../../Assets/areas/areas.png'

function Areas() {
  const country = ["Anderson", "Bledsoe", "Blount", "Bradley", "Campbell", "Cannon", "Clay", "Coffee", "Cumberland", "Dekalb", "Fentress", "Franklin", "Grundy", "Hamilton", "Jackson", "Knox", "Loudon", "Marion", "McMinn", "Meigs", "Monroe", "Morgan", "Overton", "Pickett", "Polk", "Putnam", "Roane", "Rhea", "Scott", "Sequatchie", "Sevier", "Smith", "Van Buren", "Warren",
    "White"]
    useEffect(() => {
      document.title = 'Areas - Five Star Estate Liquidations ';
    }, [])

  return (
    <div className="areas taglinePadding">
      <Tagline />
      <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 1920 150`}
          preserveAspectRatio="xMinYMin slice"
        >
          <g style={{ opacity: 1 }}>
            <path
              d="M1920,1335H0V80.24c246.48,67.94,445.72,78.28,579,75.92,346.28-6.11,513-102.58,904-108.37a2471.29,2471.29,0,0,1,437,32.45Z"
              transform="translate(0 -47.52)"
              style={{ fill: "#94abff" }}
            />
          </g>
        </svg>
      <section className="areasSection">
        <div className="container">
          <div className="areasContent">
          <div className="title">
          <h1>Areas We Serve</h1>

          </div>
          <div className="areasWrapper">
            <div className='map'>
              <h3>Five Star Estate Liquidations serves a 35 county area in middle-eastern Tennessee.</h3>
              <img src={aresMap} alt='map' />
            </div>
            <div className='textMapwrapper'>
             <span>The counties we serve are:</span>
              <div className='textMap'>
                  {country.map(value => {
                    return <p>{value}</p>
                  })}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Areas