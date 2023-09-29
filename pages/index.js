import Head from 'next/head'

import Hero from '../components/hero/hero'
import Header from '../components/header/header'
import Projects from '../components/content/ProjectsLayout'
import Nav from '../components/nav/nav'
import Scene from '../components/scene/Scene'

export default function Home() {
	return (
		<>
			<Head>
				<title>Gaëtan Jestin | Folio</title>
				<meta name='description' content='To be written.' />
			</Head>

			<div className='hero-container'>
				<Header />
				<Hero />
				<Nav />
			</div>
			<div className='projects-container'>
				<Projects />
			</div>
			<div className='model'>
				<Scene />
			</div>
		</>
	)
}
