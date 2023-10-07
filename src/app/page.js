import Admin from '@/Components/templates/Admin'
import CalltoAction from '@/Components/templates/CalltoAction'
import Main from '@/Components/templates/Main'
import Map from '@/Components/templates/Map'
import Office from '@/Components/templates/Ofiice'
import Options from '@/Components/templates/Options'
import Portfolio from '@/Components/templates/Portfolio'
import Services from '@/Components/templates/Services'
import Team from '@/Components/templates/Team'
import Users from '@/Components/templates/Users'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-100">
      <Main />
      <div className="mx-auto max-w-[1320px] px-4">
        <Office/>
        <Options/>
        <Services/>
      </div>
      <CalltoAction/>
      <div className="mx-auto max-w-[1320px] px-4">
        <Portfolio/>
        <Admin/>
      </div>
      <Users/>
      <div className="mx-auto w-full lg:max-w-[1320px] px-4">
        <Team/>
        <Map/>
      </div>
    </div>
  )
}
