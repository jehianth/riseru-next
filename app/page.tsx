import Aboutus from '@/components/Aboutus'
import Available from '@/components/Available'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import Quote1 from '@/components/Quote1'
import Quote2 from '@/components/Quote2'
import Whychooseus from '@/components/Whychooseus'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Quote1/>
      <Overview/>
      <Whychooseus/>
      <Quote2/>
      <Aboutus/>
      <Available/>
    </main>
  )
}
