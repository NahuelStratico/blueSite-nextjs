/** @jsx jsx */
import { FaBold } from 'react-icons/fa';
import { jsx } from 'theme-ui';
import { Container, Box, Text } from 'theme-ui';

import SectionHeader from '../components/section-header';

export default function StandOut() {
    return(
        <section >
            <Container sx={styles.container}>
                <SectionHeader
                    title="El mundo de la construcción es un sector con mucha competencia y es de vital importancia la credibilidad que se proyecta."
                    slogan="¿Por qué destacarme?"
                />
                <Box>
                    <Text as='p'sx={styles.p}>¿Te gustaría que reconozcan por tu obras, desarrollos y proyectos?</Text>
                    <Text as='p'>Si buscas destacarte, tener más credibilidad y ser reconocido por tus obras estas en la web indicada, te ayudamos a lograrlo !.
</Text>
                    <Text as='p'>Los estudios de arquitectura más grandes y prestigiosos de la Argentina utilizan nuestros servicios. Hilton Pilar (Estudio MRA+A) - Torre Banco Macro (Arq. Cesar Pelli) - Torre Irsa (Desarrolladora Irsa) - Trayectoria (Estudio Mariani Perez Maraviglia Cañadas) - Oficinas Mercado Libre Polo Dot (Estudio Elias Irastorza) - Trayectoria (Estudio PFZ Asociados), entre otros.
</Text>
                    <Text as='p'>Además de entidades y empresas como Banco Galicia, Banco Hipotecario, Banco Macro, Mercado Libre, Starbucks, Criba, Forever Pipe y muchísimas más.</Text>
                </Box>
            </Container>
        </section>
    )
}


const styles = {
    container:{
            my: 6,
        },
    p:{
        fontWeight: 'bold',
    }
};