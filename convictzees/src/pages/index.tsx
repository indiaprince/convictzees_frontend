
import { NextPage } from 'next'
import Layout from '../components/layouts/Layout'
import About from "../components/ui/About";
import Center from "../components/ui/Center";
import Diagram from "../components/ui/Diagram";
import RoadMap from "../components/ui/RoadMap";
import Section1 from "../components/ui/Section1";
import Section2 from "../components/ui/Section2";




const Home: NextPage = () => {

  return (
  <Layout>
    <Center/>
    <About/>
    <Diagram/>
    <Section1 isTron={false}/>
    <Section2/>
    <RoadMap/>
  </Layout>
  )
}

export default Home;