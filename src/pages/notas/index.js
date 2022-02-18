import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';


export default function notas(){
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title="Blue Producciones" />
            </Layout>
        </ThemeProvider>
    )
}