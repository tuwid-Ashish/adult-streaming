import Link from 'next/link';
import { Play, Laptop, Users, Film } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-bg to-bg">
      <div className="max-w-5xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent2 uppercase italic">
            StreamBox
          </h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Choose a UI version to preview the streaming experience.
            Each version features distinct layouts and themes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-white">
          {/* Version 1 - P Style */}
          <Link href="/v1" className="group">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#1b1b1b] hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Laptop className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-black mx-2 flex justify-center items-center text-center gap-1">
                    Stream<span className="bg-accent text-black px-1 rounded-sm text-2xl">Box</span>
                  </h2>
                  <p className="text-muted text-sm px-4">Classic Tube UI clone with dense grids, signature orange branding, and verified tags.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#282828] border border-white/5 rounded-sm text-[10px] font-bold uppercase tracking-wider text-accent">Pornhun -Style Clone</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Version 2 - X Style */}
          <Link href="/v2" className="group">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e1e] hover:border-accent2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent2/20">
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-accent2/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-accent2" />
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-2 tracking-tighter">
                    <span className="text-accent">x</span>Stream
                  </h2>
                  <p className="text-muted text-sm px-4">Modern Red/Blue UI clone featuring a persistent category sidebar and high-density content wall.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#2a2f3a] border border-white/5 rounded-sm text-[10px] font-bold uppercase tracking-wider text-accent2">Xhemster -Style Clone</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Version 3 - Cinema
          <Link href="/v3" className="group">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black hover:border-yellow-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-600/20">
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-yellow-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Film className="w-10 h-10 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-2 tracking-tight italic">CINEMA</h2>
                  <p className="text-muted text-sm px-4">Premium OTT layout with wide banners, immersive modals, and elegant gold accents.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-neutral-900 border border-white/5 rounded-sm text-[10px] font-bold uppercase tracking-wider text-yellow-600">Premium OTT</span>
                </div>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
