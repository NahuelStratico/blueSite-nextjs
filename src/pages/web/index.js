import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import WorkFlow from '../../sections/workflow';

export default function web(){
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title="Blue Producciones" />
            </Layout>
        </ThemeProvider>
    )
}