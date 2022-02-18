/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logoBlue.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image style={styles.footer.logoResponsive} src={FooterLogo} alt="Logo" />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, index) => (
                <Link
                  path={item.path}
                  key={index}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.text}>
            Desde Blue Producciones con <span css={{color:'red', fontSize:'24px'}}> ♥ </span> para profesionales de la construcción. 
          </Text>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} - Blue Producciones
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    text:{
      mb: 2,
      fontWeight:600,
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
    logoResponsive:{
      width: '25%',
    },
  },
};
