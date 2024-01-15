import MaxWidthWrapper from './components/MaxWidhtWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { PERKS } from '../../constants'
import { Button, buttonVariants } from './components/ui/button'


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
        Exploradores de Asturias: Tu Viaje Personalizado {' '}<span className='text-green-900'>Comienza Aquí</span>.
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
        "Descubre la esencia de Asturias con nuestra empresa de viajes, donde cada rincón cuenta una historia única. Desde las majestuosas montañas hasta las costas pintorescas, te llevamos en un viaje fascinante lleno de cultura, tradiciones y experiencias auténticas. Deja que nuestro equipo experto te guíe por este paraíso asturiano, creando recuerdos que perdurarán para siempre."
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href={'/servicios'} className={buttonVariants()}>¡Comineza la aventura!</Link>
            <Button variant={'ghost'}>Mas Informacion &rarr;</Button>
        </div>
      </div>
      
      {/* TODO: lista de informacion */}
    </MaxWidthWrapper>
    <section className='border-t border-gray-200 bg-gray-50'>
      <MaxWidthWrapper className='py-20'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-x-6 lg:grid-cols-3 lg:gap-y-0'>
          {PERKS.map((peck) => (
            <div key={peck.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-green-900 text-white'>
                  {<peck.Icon  className='w-1/3 h-1/3'/>}
                </div>
              </div>

              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>{peck.name}</h3>
                <p className='mt-3 text-sm font-muted-foreground text-gray-900'>
                  {peck.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </MaxWidthWrapper>
    </section>

    <section>
      <MaxWidthWrapper children={undefined}>
        
      </MaxWidthWrapper>
    </section>
</>
  )
}
