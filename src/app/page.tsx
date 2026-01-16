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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Version 1 */}
          <Link href="/v1" className="group">
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-border bg-surface hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Laptop className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Velocity</h2>
                  <p className="text-muted text-sm px-4">Classic Tube-style experience with dense grids and powerful search.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-border rounded-full text-[10px] font-bold uppercase tracking-wider">Midnight</span>
                  <span className="px-3 py-1 bg-border rounded-full text-[10px] font-bold uppercase tracking-wider">Graphite</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Version 2 */}
          <Link href="/v2" className="group">
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-border bg-surface hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Circle</h2>
                  <p className="text-muted text-sm px-4">Mobile-first, creator-social feed with stories and immersive cards.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-border rounded-full text-[10px] font-bold uppercase tracking-wider">Clean Pink</span>
                  <span className="px-3 py-1 bg-border rounded-full text-[10px] font-bold uppercase tracking-wider">Neon</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Version 3 */}
          <Link href="/v3" className="group">
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-border bg-surface hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Film className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Cinema</h2>
                  <p className="text-muted text-sm px-4">Premium OTT layout with wide banners and high-contrast gold accents.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-border rounded-full text-[10px] font-bold uppercase tracking-wider">Classic Cinema</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
