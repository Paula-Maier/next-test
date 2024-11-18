import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import Blogs from './components/blogs'
import ContactForm from './components/contact'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Blogs />
      <ContactForm />
      <Footer />
    </div>
  )
}
