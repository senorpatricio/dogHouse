import * as React from "react"
import Layout from "../components/Layout"
import { PageProps } from "gatsby"


const NotFoundPage = ({location}: PageProps) => (
  <Layout location={location}>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)


export default NotFoundPage
