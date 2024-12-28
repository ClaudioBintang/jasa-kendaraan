import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Background from "../../assets/BG.png"
import Vehicle from "../../assets/Car.png"
import { Link } from "react-router-dom"
import Brv from "../../assets/BRV.png"
import Hilux from "../../assets/picture.png"
import Crv from "../../assets/HILUX.png"
import Krv from "../../assets/HRV.png"
import { Users, Leaf, HeadphonesIcon } from 'lucide-react'
import { ArrowRight, Calendar, Car, Clock, MapPin, PhoneCall, Settings } from 'lucide-react'
const Homepage = () => {
<<<<<<< HEAD

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "25k+",
    label: "Happy customers"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    number: "86k+",
    label: "Carbon emissions saved (kg)"
  },
  {
    icon: <Car className="w-8 h-8" />,
    number: "40+",
    label: "Vehicles to choose from"
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    number: "50k+",
    label: "US based support staff"
  }
]
const popularRentals = [
  {
    id: 1,
    name: "Polestar 2",
    description: "The Polestar 2 is so fast you'll leave a Tesla in the dust.",
    image: Brv  
  },
  {
    id: 2,
    name: "Ford Mustang Mach-E",
    description: "The Mach-E is so stylish you'll turn heads everywhere you go.",
    image: Hilux
  },
  {
    id: 3,
    name: "Rivian R1S",
    description: "An electric truck so luxurious it feels like you're in a Mercedes.",
    image: Crv
  },
  {
    id: 4,
    name: "Tesla Model 3",
    description: "The Model 3 is so quiet that you'll wonder if it's even on.",
    image: Krv
  }
]
    return (
        <>
    <Navbar />
      <header className="min-h-screen text-white" style={{ backgroundImage: `url(${Background})` }}>
        <section className="relative h-screen">
        <div className="container px-4 pt-24 mx-auto lg:pt-32">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
          <h1 className="mb-4 text-6xl font-bold tracking-wider ">
            ELEVATE<br />YOUR RIDE
          </h1>
          <p className="max-w-md mb-8 text-lg">
            RENT AN ELECTRIC CAR AND FEEL<br />
            THE POWER OF THE FUTURE.
          </p>
          <Link 
            to={"/Detail"}
            className="inline-flex items-center bg-[#00c2b3] text-white px-6 py-3 rounded-full font-medium hover:bg-[#00a99e] transition-colors"
          > 
            VEHICLES
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Vehicle} alt="electrify EV" className="items-end justify-end object-contain w-full h-auto" />
        </div>
        </div>
        </div> 
      </section>

      {/* How It Works Section */}
      <section className="py-24 text-black bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-4xl font-bold">HOW IT WORKS</h2>
            {/* <Settings className="w-8 h-8" /> */}
          </div>
          <p className="mb-16 text-lg">Rent your next ev following these steps</p>
          
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col gap-4">
              <Car className="h-8 w-8 text-[#00c2b3]" />
              <h3 className="text-xl font-bold">Choose an EV</h3>
              <p className="text-gray-600">
                Browse our catalog to view hundreds of EVs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-4">
              <Calendar className="h-8 w-8 text-[#00c2b3]" />
              <h3 className="text-xl font-bold">Pick a date</h3>
              <p className="text-gray-600">
                Choose the dates you'd like to rent your EV.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-4">
              <Settings className="h-8 w-8 text-[#00c2b3]" />
              <h3 className="text-xl font-bold">Book your car</h3>
              <p className="text-gray-600">
                Confirm details and book your vehicle.
              </p>
            </div>

            {/* iframe */}
          <div className="flex justify-start pb-3">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N6IfJzc1Ujg?si=g2epHTcREnhfCUTl" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen 
          className=""></iframe>
          </div>
          
            {/* Step 4 */}
            <div className="flex flex-col gap-4">
              <Clock className="h-8 w-8 text-[#00c2b3]" />
              <h3 className="text-xl font-bold">Flexible dates</h3>
              <p className="text-gray-600">
                Choose any date, time, and length you'd like to rent your EV for
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col gap-4">
              <MapPin className="h-8 w-8 text-[#00c2b3]" />
              <h3 className="text-xl font-bold">Plan your trip</h3>
              <p className="text-gray-600">
                Our built in charging map helps you plan your trip
              </p>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col gap-4">
              <PhoneCall className="h-8 w-8 text-[#00c2b3]" />
              <h3 className="text-xl font-bold">24/7 car delivery</h3>
              <p className="text-gray-600">
                Get your EV delivered to your location any time of day
              </p>
            </div>

            {/* Step 7 */}
            <div className="flex flex-col gap-4">
              <Car className="h-8 w-8 text-[#00c2b3]" />
              <h3 className="text-xl font-bold">24Hr car delivery</h3>
              <p className="text-gray-600">
                Get your EV delivered to your location any time of day
              </p>
            </div>
          </div>
        </div>
      </section>
=======
    
    return (
        <>
        <Navbar />
        <header>
            <aside>
                <div>
                    <h3>lihatt, kami punya banyak tenaga kerja yang berkualitas</h3>
                </div>
            </aside>
>>>>>>> faca21e1b66ce2157e2b1160aa1ee4408bcd7aa2
        </header>
    {/* section area */}
    <main className="min-h-screen">
      {/* Numbers That Matter Section */}
      <section className="bg-[#1a1a1a] text-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="mb-4 text-4xl font-bold text-center">
            NUMBERS THAT MATTER
          </h2>
          <p className="mb-12 text-center text-gray-300">
            With so many vehicle rental websites, here's some facts that make us stand out.
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 text-center text-black bg-white rounded-lg">
                <div className="flex justify-center mb-4 text-[#00c2b3]">
                  {stat.icon}
                </div>
                <h3 className="mb-2 text-2xl font-bold">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Popular Rentals Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center">
            MOST POPULAR RENTALS
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
            {popularRentals.map((rental) => (
              <div key={rental.id} className="p-4 border rounded-lg ">
                <img
                  src={rental.image}
                  alt={rental.name}
                  
                  className="w-full h-auto mb-4"
                />
                <h3 className="mb-2 text-xl font-bold">{rental.name}</h3>
                <p className="mb-4 text-gray-600">{rental.description}</p>
                <Link 
                  to={"/detail"} 
                  className="text-[#00c2b3] inline-flex items-center hover:underline"
                >
                  MORE INFO
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={"/detail"}
              className="inline-flex items-center bg-[#00c2b3] text-white px-6 py-3 rounded-full font-medium hover:bg-[#00a99e] transition-colors"
            >
              SHOP ALL
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
        <Footer />
        </>
    )
}
export default Homepage
