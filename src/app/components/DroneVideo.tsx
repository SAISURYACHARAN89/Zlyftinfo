export default function DroneVideo() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none select-none"
      >
        <source src="/videos/zlyft-drone.webm" type="video/webm" />
        <source src="/videos/zlyft-drone.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center mt-48">
        <h2 className="text-4xl font-semibold text-white">ZLYFT VTOL Drone</h2>
        <p className="mt-2 text-gray-300 max-w-xl mx-auto">
          Experience seamless drone delivery powered by cutting-edge technology.
        </p>
      </div>
    </section>
  )
}
