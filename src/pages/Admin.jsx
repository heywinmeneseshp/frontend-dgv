import Image from 'next/image';

import Layout from '@/layout/Layout';


export default function Home() {


    return (
        <>
            <Layout>
                <div>
                    <Image
                        src="/icons/logo.png"  // ruta relativa en la carpeta public
                        alt="Guineo verde"
                        width={500}      // ancho en píxeles
                        height={300}     // alto en píxeles
                    />
                </div>
            </Layout>
        </>
    );
}
