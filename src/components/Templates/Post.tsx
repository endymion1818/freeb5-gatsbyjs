import React, {FC} from 'react'
import Layout from './Layout'
import { Helmet } from 'react-helmet'

export interface IPostTemplateProps {
    data: {
        site: {
            siteMetadata: {
                title: string
            }
        }   
    }
}

export const frontmatter = {

}
 
const PostTemplate: FC<IPostTemplateProps> = ({data}) => (
    <Layout>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="#FreeBabylon5"/>
        </Helmet>
        
    </Layout>
);
 
export default PostTemplate;