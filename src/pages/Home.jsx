import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="font-sans">
      {/* Header Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/HeaderImage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">THE ULTIMATE CONVENIENCE FOR BUSY PEOPLE</h1>
          <p className="mt-4 text-lg md:text-xl">Experience the Convenience in Home or in Salon of our Barber Services</p>
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 font-semibold text-black bg-yellow-400 rounded">BOOK AN APPOINTMENT</button>
            <button className="px-6 py-3 font-semibold text-white border border-white rounded">BECOME PARTNER</button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="flex flex-col items-center py-12 bg-gray-100">
        <div className="flex items-center gap-8 px-0 md:flex-row shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
          <img src="/LOGO.jpg" alt="Clipper Call Logo" className="h-32 w-auto" style={{ height: '200px', width: '200px' }} />
          <h2 className="text-4xl font-bold text-center">CLIPPER CALL</h2>
        </div>
        <p className="mt-2 text-sm text-center">BE DIFFERENT LOOK DIFFERENT</p>
      </section>

      {/* Appointment Call to Action */}
      <section className="flex flex-col items-center py-12 md:flex-row md:justify-between bg-[#dec7a6]">
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold ml-20">BOOK YOUR SALON APPOINTMENT NOW</h2>
          <p className="mt-4 ml-30 md:ml-20">Book your barber now with just in two clicks and have a better service experience now</p>
          <div className="flex gap-8 mt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold ml-6">99%</h3>
              <p className='ml-20'>Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">100%</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img src="/Image2.jpg" alt="Barber" className="w-full max-w-md rounded-lg" />
        </div>
      </section>


{/* Services Section */}
<section className="py-12 bg-gray-100">
  <h2 className="text-3xl font-bold text-center">BROWSE OUR SERVICES</h2>
  <p className="mt-2 text-center">You can easily book a barber’s appointment at home or at salon as yours</p>
  <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      { name: "ADULT HAIRCUT", description: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis", image: "/AdultHaircut.jpg" },
      { name: "KIDS HAIRCUT", description: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis", image: "/KidsHaircut.jpg" },
      { name: "BEARD TRIM", description: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis", image: "/BeardTrim.jpg" },
      { name: "NECK SHAVE", description: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis", image: "/NeckShave.jpg" },
      { name: "SCALP MOISTURIZING", description: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis", image: "/ScalpMoisturizing.jpg" },
      { name: "BEARD GROOMING", description: "Choose the best style for your beard and have the best grooming experience", image: "/Beard.jpg" },
      { name: "SPA SERVICES", description: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis", image: "/Spa.jpg" },
      { name: "MORE++", image: "/more.png"}
    ].map((service, index) => (
      <div key={index} className="flex items-center p-4 bg-white rounded shadow m-5">
        {service.image ? (
          <img src={service.image} alt={service.name} className="w-16 h-16 object-cover rounded mr-4" />
        ) : (
          <div className="mr-4 text-gray-700">{service.icon}</div>
        )}
        <div>
          <h3 className="text-xl font-bold">{service.name}</h3>
          <p className="mt-2">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
  </section>
</div>  

    <Footer/>
    </div>
  )
}
