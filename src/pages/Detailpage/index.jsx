import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Brv from "../../assets/BRV.png"
import Hilux from "../../assets/picture.png"
import Crv from "../../assets/HILUX.png"
import Krv from "../../assets/HRV.png"
const Detailpage = () => {
    const [data, setData] = useState([])
    const { id } = useParams();
const [currentPage, setCurrentPage] = useState([
  {
    page : 2,
    current_Page: 1,
    per_page: null,
    total: null,
    total_pages: null,
  }
]);

    
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

    const getReqres = async (page) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page${perPage}`);
            console.log(response);
            setData(response.data.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getReqres()
      }, [id])
    return (
        <>
        <Navbar />
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
        <div className="justify-center text-center">
            <h4 className="text-3xl font-bold text-gray-700">hello there, if you interest with our service and want to rent a EV car, 
                <br />please call the sales detail in here</h4>
        </div>
        <div className="grid items-center justify-center py-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => {
                return (
                    <div key={item.id} className="flex flex-col justify-center p-4 m-3 bg-slate-400">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                        <img src={item.avatar} alt="sales image" className="object-cover w-full h-full"/>
                        </div>
                        <p className="mb-1 text-lg font-semibold text-gray-800">{item.first_name} {item.last_name}</p>
                        <p className="mb-4 text-sm font-semibold text-gray-600">{item.email}</p>
                        <button className="w-full py-4 font-semibold transition-colors duration-300 bg-teal-600 rounded-lg hover:bg-teal-700">Call now</button>
                        
                    </div>
                )
            })}
        </div>
        <Footer />
        </>
    )
}
export default Detailpage