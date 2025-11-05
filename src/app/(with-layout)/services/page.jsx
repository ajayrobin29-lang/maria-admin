import "@/app/globals.css";
import Hero from "@/components/Hero";
import { Building, Church, Furniture, Home, Office, Project16, Tools, Wardrobe01 } from "@/components/Icons";
export const metadata = {
  title: "Services | Maria Concepts",
};

export default function MyApp() {

  return (
    <>
          <Hero title={'Our Services'}/>
      <main className="bg-neutral-100 text-neutral-800 px-4 xl:px-8 py-12 mx-auto text-neutral-800">

          <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly pt-4 pb-4 gap-8">

            <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Wardrobe01 className="py-6 text-primary-600 w-8" />

                <p className="text-xl">Interior Design</p>
            </div>
            <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Building className="py-6 text-primary-600 w-8" />

<p className="text-xl">Constructions</p>
            </div>
                                    <div className="rounded shadow-sm p-4  md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Tools className="py-6 text-primary-600 w-8" />

              <p className="text-xl">Renovation</p>
            </div>
                        <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Furniture className="py-6 text-primary-600 w-8" />

              <p className="text-xl">Institutional Archetecture</p>
            </div>

                                    <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Church className="py-6 text-primary-600 w-8" />

              <p className="text-xl">Church Works</p>
            </div>

                                    <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Home className="py-6 text-primary-600 w-8" />

              <p className="text-xl">Residentials</p>
            </div>

                                    <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Office className="py-6 text-primary-600 w-8" />

              <p className="text-xl">Office Spaces</p>
            </div>

            <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
            <Project16 className="py-6 text-primary-600 w-8" />
                <p className="text-xl">Project Management</p>
            </div>
          </div>


      </main>
    </>
  );
}
