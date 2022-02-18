/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';

import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Arquitectos from 'assets/key-feature/arquitectos.svg';
import Constructoras from 'assets/key-feature/constructora.svg';
import Desarrolladoras from 'assets/key-feature/desarrolladora.svg';
// import Performance from 'assets/key-feature/performance.svg';
// import Partnership from 'assets/key-feature/partnership.svg';
// import Subscription from 'assets/key-feature/subscription.svg';
// import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Arquitectos,
    altText: 'Arquitectos',
    title: 'Arquitectos',
    text:
      'Que quieran ser reconocidos por sus obras y destacarse en el sector.',
  },
  {
    id: 2,
    imgSrc: Constructoras,
    altText: 'Constructoras',
    title: 'Constructoras',
    text:
      'Que quieran ser referentes en Argentina con proyectos destacados.',
  },
  {
    id: 3,
    imgSrc: Desarrolladoras,
    altText: 'Desarrolladoras',
    title: 'Desarrolladoras',
    text:
      'Que deseen sobresalir y transmitir confianza en todas sus obras.',
  },
  // {
  //   id: 4,
  //   imgSrc: Support,
  //   altText: 'Customer Support',
  //   title: 'Customer Support',
  //   text:
  //     'Get your blood tests delivered at home collect a sample from the your blood tests.',
  // },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature' }} id="feature">
     <Container sx={styles.container}>
       <SectionHeader 
        slogan="¿ a quienes nos dirigimos ?"
        title="Comunicamos para tres segmentos específicos."
       />
       <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  container: {
    '@media screen (min-width: 480px)': {
      mt: 5,
    }, 
    // '@media screen and (min-width: 768px)': {
    //   mt: 7,
    // }, 
  }
};
