export default function GoogleMap({className}) {
  return (
    <div className={"w-full h-auto " + className} >
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d289.12219020076463!2d77.59454346998783!3d12.84656973894926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759920261796!5m2!1sen!2sin" 
width={300} 
height={200} className="border-0 overflow-hidden w-full h-70 rounded" allowFullScreen="" loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}