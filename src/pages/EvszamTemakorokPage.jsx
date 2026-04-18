import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { evszamTemakorokPatch } from '../data/evszamTemakorokPatch';

export default function EvszamTemakorokPage() {
  const temakorok = useMemo(() => evszamTemakorokPatch, []);

  return (
    <div className='container py-4'>
      <div className='row mb-4'>
        <div className='col-12'>
          <div className='p-4 bg-light border rounded-4 shadow-sm'>
            <h1 className='h3 mb-2'>Évszám kvízek</h1>
            <p className='text-secondary mb-0'>
              A következő három új témakör már csak évszámokra fókuszál. A kártyákon belül 3-3 külön teszt van: alap, vegyes és nagy.
            </p>
          </div>
        </div>
      </div>

      <div className='row g-4'>
        {temakorok.map((temakor) => (
          <div className='col-12 col-lg-4' key={temakor.id}>
            <div className='card h-100 border-0 shadow-sm rounded-4 overflow-hidden'>
              <div className={`card-header bg-${temakor.szin} text-white py-3`}>
                <div className='fw-semibold'>{temakor.nev}</div>
              </div>
              <div className='card-body d-flex flex-column'>
                <p className='text-secondary small mb-4'>{temakor.leiras}</p>

                <div className='d-grid gap-2 mt-auto'>
                  {temakor.tesztek.map((slug, index) => (
                    <Link
                      key={slug}
                      to={`/evszam-kviz/${slug}`}
                      className='btn btn-outline-dark rounded-3 text-start'
                    >
                      {index + 1}. teszt megnyitása
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
