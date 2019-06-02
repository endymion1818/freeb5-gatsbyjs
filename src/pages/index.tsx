import React, {FC} from 'react'
import Layout from '../components/Templates/Layout'

export interface IIndexPageProps {
    
}
 
const IndexPage: FC<IIndexPageProps> = () => (
    <Layout>
        <h1>Home</h1>
    </Layout>
)
 
export default IndexPage