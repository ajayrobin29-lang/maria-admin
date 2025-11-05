import "@/app/globals.css";
import Hero from "@/components/Hero";
import ImageView from "@/components/FullScreenButton";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Our Gallery | Maria Concepts",
};

export default function MyApp() {



  return (
    <>
          <Hero title={'Our Gallery'}/>
      <main className="bg-neutral-100 text-neutral-800 px-4 xl:px-8 py-12 mx-auto text-left text-neutral-800">
        <>

        <Gallery />

        </>
      </main>

      <ImageView />
    </>
  );
}
